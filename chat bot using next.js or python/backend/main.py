from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import List
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI()

# Configure CORS
origins = [
    "http://localhost:3000",    # Next.js default port
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.middleware("http")
async def add_cors_headers(request, call_next):
    response = await call_next(request)
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Credentials"] = "true"
    return response

# Initialize global variables
model = None 
USE_GEMINI = False

# Configure Gemini AI
api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    print("WARNING: GEMINI_API_KEY not found in environment variables. Using echo mode.")
else:
    try:
        import google.generativeai as genai
        genai.configure(api_key=api_key)
        model = genai.GenerativeModel('gemini-1.5-flash')
        USE_GEMINI = True
        print("Gemini AI configured successfully.")
    except Exception as e:
        print(f"Error configuring Gemini AI: {e}")
        print("Falling back to echo mode.")

class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: List[Message]

@app.get("/")
async def read_root():
    status_message = "Gemini AI Chatbot API is running" if USE_GEMINI else "Chatbot API is running (Echo Mode)"
    return JSONResponse(
        content={"status": "healthy", "message": status_message, "gemini_enabled": USE_GEMINI},
        headers={"Access-Control-Allow-Origin": "*"}
    )

@app.post("/api/chat")
async def chat(request: ChatRequest):
    try:
        # Extract the last user message
        last_message = next((msg.content for msg in reversed(request.messages) if msg.role == "user"), None)
        
        if not last_message:
            raise HTTPException(status_code=400, detail="No user message found")

        if USE_GEMINI and model:
            try:
                # Generate response using Gemini
                response = model.generate_content(last_message)
                
                if not response or not hasattr(response, 'text'):
                    raise Exception("No response generated from AI")
                
                response_text = response.text
            except Exception as e:
                print(f"Gemini API error: {str(e)}")
                response_text = f"Error with Gemini API: {str(e)}"
        else:
            # Echo mode
            response_text = f"Echo mode (Gemini API not configured): {last_message}"

        return JSONResponse(
            content={
                "role": "assistant",
                "content": response_text
            },
            headers={"Access-Control-Allow-Origin": "*"}
        )
    except Exception as e:
        print(f"Error in chat endpoint: {str(e)}")
        return JSONResponse(
            content={"error": str(e)},
            status_code=500,
            headers={"Access-Control-Allow-Origin": "*"}
        )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)