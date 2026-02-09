interface Navigator {
  xr?: {
    isSessionSupported(mode: string): Promise<boolean>;
    requestSession(mode: string, options?: XRSessionInit): Promise<XRSession>;
  };
}

interface XRSessionInit {
  requiredFeatures?: string[];
  optionalFeatures?: string[];
}

interface XRSession {
  updateRenderState(state: { baseLayer: XRWebGLLayer }): void;
  end(): Promise<void>;
}

interface XRWebGLLayer {
  new (session: XRSession, gl: WebGLRenderingContext): XRWebGLLayer;
} 