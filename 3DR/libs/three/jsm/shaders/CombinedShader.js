/*
 * Combined post-processing pass
 *
 * ACESFilmic Tone mapping
 * Brightness
 * Contrast
 *
*/

const CombinedShader = {

	uniforms: {
  
	  tDiffuse: { value: null },
	  toneMappingExposure: { value: 1.0 },
	  brightness: { value: 0 },
	  contrast: { value: 0 },
  
	},
  
	vertexShader:
  
	/* glsl */`
	  varying vec2 vUv;
  
	  void main() {
  
		vUv = uv;
		gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  
	  }`,
  
	fragmentShader:
  
	/* glsl */`
	  #define saturate(a) clamp( a, 0.0, 1.0 )
  
	  uniform sampler2D tDiffuse;
  
	  uniform float toneMappingExposure;
  
	  uniform float brightness;
	  uniform float contrast;
  
	  varying vec2 vUv;
  
	  vec3 ACESFilmicToneMapping( vec3 color ) {
  
		color *= toneMappingExposure;
		return saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );
  
	  }
  
	  void main() {
  
		gl_FragColor = texture2D( tDiffuse, vUv );
		gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
  
		gl_FragColor.rgb += brightness;
  
		if (contrast > 0.0) {
		  gl_FragColor.rgb = (gl_FragColor.rgb - 0.5) / (1.0 - contrast) + 0.5;
		} else {
		  gl_FragColor.rgb = (gl_FragColor.rgb - 0.5) * (1.0 + contrast) + 0.5;
		}
  
	  } `,
  
  };
  
  export default CombinedShader;