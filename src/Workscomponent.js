import React from 'react';

export default function Workscomponent(props) {
  return (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1366 768" enableBackground="new 0 0 1366 768" xmlSpace="preserve" width={1366} height={768} {...props}>
      <path id="SVGID_x5F_1_x5F_" fill="none" d="M160,131l715,2" />
      <a xlinkHref="https://my-app-13d40.firebaseapp.com/" target="_blank">
        <text id="exp1">
          <textPath xlinkHref="#SVGID_x5F_1_x5F_" startOffset="-96.8274%">
            <tspan>React SVG Animation Web App </tspan>
						<animate attributeName="startOffset" from="-75%" to ="16.8274%" begin="2s" dur="1s" repeatCount="1" fill="freeze"/>
          </textPath>
        </text>
      </a>
      <path id="SVGID_x5F_2_x5F_" fill="none" d="M160,208l715,2" />
      <a xlinkHref="http://chrisandrachelwedding.atwebpages.com/#/app-root" target="_blank">
        <text id="exp1">
          <textPath xlinkHref="#SVGID_x5F_2_x5F_" startOffset="-45%">
            <tspan>Angular App</tspan>
						<animate attributeName="startOffset" from="-75%" to ="16.8274%" begin="4s" dur="1s" repeatCount="1" fill="freeze"/>
          </textPath>
        </text>
      </a>
    </svg>
  );
}
