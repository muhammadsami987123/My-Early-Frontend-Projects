"use client";
import React, { useState } from 'react';

export default function Result() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="my-8 text-center text-3xl font-bold text-blue-900">
                Grand Entrance Exam Result
            </h1>

            <form className="w-full max-w-2xl bg-white rounded shadow-lg p-8 text-black">
                
                <div className="my-6">
                    <label htmlFor="regNo" className="text-slate-700 font-medium md:text-xl">
                        Registration Number *
                    </label>
                    <div>
                        <input
                            type="tel"
                            id="regNo"
                            maxLength={10}
                            className="block w-full h-12 p-3 mt-1 bg-gray-100 border border-gray-400 rounded outline-none focus:ring-2 focus:ring-blue-500 md:text-xl"
                            placeholder="Registration Number"
                            name="regNo"
                            required
                        />
                    </div>
                    <p className="mt-1 text-sm text-red-500">Registration Number is required</p>
                </div>
                
                <div className="my-6">
                    <label htmlFor="cnic" className="text-slate-700 font-medium md:text-xl">
                        CNIC or B-Form Number *
                    </label>
                    <div>
                        <input
                            type="tel"
                            id="cnic"
                            maxLength={13}
                            className="block w-full h-12 p-3 mt-1 bg-gray-100 border border-gray-400 rounded outline-none focus:ring-2 focus:ring-blue-500 md:text-xl"
                            placeholder="CNIC or B-Form Number"
                            name="cnic"
                            required
                        />
                    </div>
                </div>

                <div className="flex justify-center">
                    <button
                    
                        type="submit"
                        className="w-full py-3 mt-5 text-sm font-semibold tracking-wide text-white transition-all bg-blue-900 rounded hover:bg-blue-600 sm:w-52 sm:text-base"
                    >
                        GET RESULT
                    </button>
                </div>
            </form>
        </main>
    );
}
