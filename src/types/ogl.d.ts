declare module 'ogl' {
  export class Renderer {
    gl: WebGLRenderingContext;
    canvas: HTMLCanvasElement;
    constructor(options?: {
      alpha?: boolean;
      premultipliedAlpha?: boolean;
      antialias?: boolean;
    });
    setSize(width: number, height: number): void;
    render(options: { scene: Mesh }): void;
  }

  export class Program {
    uniforms: Record<string, { value: any }>;
    constructor(gl: WebGLRenderingContext, options: {
      vertex: string;
      fragment: string;
      uniforms: Record<string, { value: any }>;
    });
  }

  export class Mesh {
    constructor(gl: WebGLRenderingContext, options: {
      geometry: Geometry;
      program: Program;
    });
  }

  export class Geometry {
    attributes: Record<string, any>;
    constructor(gl: WebGLRenderingContext);
  }

  export class Triangle extends Geometry {
    constructor(gl: WebGLRenderingContext);
  }

  export class Color {
    r: number;
    g: number;
    b: number;
    constructor(hex: string);
  }
}

