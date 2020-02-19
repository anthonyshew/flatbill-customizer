import React from 'react'
import PropTypes from 'prop-types'
import './_SVG.scss'
import useStateValue from '../../lib/hooks/useStateValue'

const getPath = (name,
    primaryColor,
    secondaryColor,
    tertiaryColor,
    className,
    style,
    handleClick,
    leftArmLogo,
    rightArmLogo,
    title,
    desc,
    alt) => {
    switch (name) {
        case "logo":
            return (
                <>
                    <svg className={className} viewBox="0 0 279 281" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" alt="Shewperman Logo.">
                        <title>The Shewperman Logo.</title>
                        <desc>This is the logo of Shewperman Web & Software Development.</desc>
                        <path d="M0 20C0 8.95431 8.95431 0 20 0H139.07H258.14C269.186 0 278.14 8.95431 278.14 20V145.094C278.14 150.711 275.778 156.069 271.632 159.858L152.562 268.67C144.922 275.652 133.218 275.652 125.578 268.67L6.5081 159.858C2.36185 156.069 0 150.711 0 145.094V20Z" fill="#770000" />
                        <path d="M0 20C0 8.95431 8.95431 0 20 0H139.07H258.14C269.186 0 278.14 8.95431 278.14 20V145.094C278.14 150.711 275.778 156.069 271.632 159.858L152.562 268.67C144.922 275.652 133.218 275.652 125.578 268.67L6.5081 159.858C2.36185 156.069 0 150.711 0 145.094V20Z" fill="url(#logo0_diamond)" />
                        <path d="M13.8936 23.7225C13.8936 18.1996 18.3708 13.7225 23.8936 13.7225H139.07H254.246C259.769 13.7225 264.246 18.1996 264.246 23.7225V143.856C264.246 146.679 263.053 149.371 260.961 151.266L145.525 255.877C141.708 259.336 135.888 259.329 132.078 255.862L17.1624 151.265C15.0804 149.37 13.8936 146.685 13.8936 143.87V23.7225Z" fill="#01001D" />
                        <path d="M13.8936 23.7225C13.8936 18.1996 18.3708 13.7225 23.8936 13.7225H139.07H254.246C259.769 13.7225 264.246 18.1996 264.246 23.7225V143.856C264.246 146.679 263.053 149.371 260.961 151.266L145.525 255.877C141.708 259.336 135.888 259.329 132.078 255.862L17.1624 151.265C15.0804 149.37 13.8936 146.685 13.8936 143.87V23.7225Z" fill="url(#logo1_radial)" />
                        <path d="M189.186 138.223L189.153 138.224C166.196 138.736 147.511 136.049 111.707 128.83C107.366 127.954 102.893 127.752 98.5014 128.185C79.1609 130.092 66.4963 130.471 58.6875 129.921C54.7545 129.644 52.265 129.144 50.825 128.598C50.4293 128.448 50.1697 128.319 50.0044 128.222C50.9803 120.527 53.0227 116.477 54.4924 113.562C54.7273 113.097 54.9475 112.66 55.1465 112.242C56.4087 109.59 56.1175 106.8 55.767 104.778C55.3564 102.41 54.9207 100.236 54.524 98.2564C54.4073 97.6741 54.294 97.1087 54.1857 96.5601C53.671 93.9529 54.0155 91.9153 54.8048 90.3408C55.603 88.7483 56.9667 87.4111 58.8376 86.4166C62.6434 84.3937 68.2955 83.9538 73.8597 85.7169C79.6103 87.5389 85.7693 87.3613 91.423 85.3952L94.33 84.3842C98.5258 82.9251 102.03 79.8425 104.702 76.3593C107.39 72.8569 109.397 68.7455 110.522 64.8839C111.316 62.1617 112.659 60.4165 114.198 59.3417C115.757 58.2534 117.726 57.7064 119.985 57.7578C124.572 57.8622 130.017 60.4563 134.028 65.1196C135.317 66.6174 136.623 68.0926 137.954 69.5448C142.335 74.3278 146.973 78.8599 152.071 83.1347C157.405 87.6072 163.232 91.7883 169.783 95.6785C174.963 98.7536 181.496 100.247 187.95 101.533C194.14 102.765 200.674 102.344 206.739 101.953C207.105 101.929 207.469 101.906 207.832 101.883C214.385 101.467 220.383 101.198 225.858 102.637C228.756 103.399 231.225 104.865 232.97 106.973C234.697 109.058 235.856 111.936 235.888 115.8C235.891 116.174 235.879 116.54 235.852 116.9C235.643 117.817 235.451 118.693 235.267 119.533C235.204 119.821 235.142 120.104 235.081 120.383C233.264 125.197 228.423 129.274 221.063 132.393C212.214 136.143 200.579 138.094 189.186 138.223ZM49.7445 128.031C49.7464 128.031 49.7593 128.042 49.7777 128.067C49.7519 128.044 49.7427 128.032 49.7445 128.031ZM110.505 134.712C137.827 140.221 155.486 143.159 172.789 144.015C158.989 144.296 142.066 144.092 121.27 143.352C117.068 143.202 112.691 143.719 108.59 145.279C104.223 146.941 97.5564 148.838 68.6947 148.135C60.4043 147.934 53.4703 142.437 50.9584 134.897C52.9271 135.371 55.3528 135.703 58.2481 135.907C66.571 136.493 79.6387 136.072 99.0723 134.156C102.891 133.78 106.766 133.958 110.505 134.712Z" fill="#FFC700" stroke="#FFF7AA" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                            <radialGradient id="logo0_diamond" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(278.14) rotate(131.201) scale(248.031 321.553)">
                                <stop stopColor="#BC6E6E" stopOpacity="0.46" />
                                <stop offset="1" stopColor={tertiaryColor} stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="logo1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(135.081 112.959) rotate(89.0695) scale(245.652 250.332)">
                                <stop stopColor="#6B6B88" />
                                <stop offset="1" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                    </svg>
                </>
            )
        case "striper-front":
            return (
                <>
                    <svg className={className} viewBox="0 0 502 559" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" alt="Stripe Jersey Model">
                        <title>Stripe Jersey Model</title>
                        <desc>This jersey model is made of a body that has gradient stripes to create an interesting striping effect.</desc>
                        <defs>
                            <clipPath id="left-logo-cut">
                                <rect x="461" y="115" width="41" height="500" style={{ transform: "rotate(-3deg)", transformOrigin: "50% 50%" }} />
                            </clipPath>
                            <clipPath id="right-logo-cut">
                                <rect x="0" y="28" width="41" height="500" style={{ transform: "rotate(5deg)", transformOrigin: "50% 50%" }} />
                            </clipPath>
                        </defs>
                        <path d="M186 8.5C239.416 18.9334 268.002 18.1871 318.5 8L319 7L395 47C425.373 110.91 425.656 140.843 398.5 184.5L401.5 272.5V513.8C354.5 564 362.5 556 250.5 557.5L248.493 557.527C152.828 558.81 139.734 558.986 101.5 513.8V274L104.5 184.5C87.2226 141.193 86.3612 111.833 106.5 47L184 6.5L186 8.5Z" fill={primaryColor} />
                        <path d="M186 8.5C187.004 11.6173 187.848 13.2706 190 16C238.015 24.4226 265.046 24.5482 313.5 16C316.01 12.6708 317.24 10.8696 318.5 8M186 8.5C239.416 18.9334 268.002 18.1871 318.5 8M186 8.5L184 6.5L106.5 47C86.3612 111.833 87.2226 141.193 104.5 184.5L101.5 274V513.8C140 559.3 153.009 558.806 250.5 557.5C362.5 556 354.5 564 401.5 513.8V272.5L398.5 184.5C425.656 140.843 425.373 110.91 395 47L319 7L318.5 8" stroke="black" />
                        <path d="M186 15C236.768 25.6024 265.232 24.1827 316 15C296.801 44.4437 282.46 57.6105 252.5 77C220.664 59.0484 205.983 45.6025 186 15Z" fill="#505050" stroke="black" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M195 0.5L184.5 6.5L181 9C198 42.5 233.5 74 252 80.5C274.5 69.5 303.772 42.6312 322 9L318.5 6.5L306.5 0.5C286.001 5.05657 223.001 4.08559 195 0.5ZM318.5 6.5C294.682 40.5404 269.043 63.5235 252 71C219.452 52.9789 205.055 38.4113 184.5 6.5C192 17.7419 298.5 21.5 318.5 6.5Z" fill={secondaryColor} />
                        <path d="M101.5 274L69 260L104.5 184.5L102.891 232.5L102.807 235L102.338 249L102.187 253.5L101.768 266L101.601 271L101.5 274Z" fill={secondaryColor} />
                        <path d="M434 260L398.5 184.5L400.136 232.5L400.222 235L400.699 249L400.852 253.5L401.278 266L401.449 271L401.5 272.5L434 260Z" fill={secondaryColor} />
                        <path d="M101.5 386V513C142.5 562.5 154 557 252 557C360 557 357 562.5 401.5 513V386H101.5Z" fill={secondaryColor} />
                        <path d="M101.5 381V368H401.5V381H101.5Z" fill={secondaryColor} />
                        <path d="M101.5 362.5V351H401.5V362.5H101.5Z" fill={secondaryColor} />
                        <path d="M101.5 344V334H401.5V344H101.5Z" fill={secondaryColor} />
                        <path d="M101.5 326V317H401.5V326H101.5Z" fill={secondaryColor} />
                        <path d="M101.5 307.5V301H401.5V307.5H101.5Z" fill={secondaryColor} />
                        <path d="M101.5 289.5V283.5H401.5V289.5H101.5Z" fill={secondaryColor} />
                        <path d="M101.601 271H401.449L401.278 266H101.768L101.601 271Z" fill={secondaryColor} />
                        <path d="M102.187 253.5H400.852L400.699 249H102.338L102.187 253.5Z" fill={secondaryColor} />
                        <path d="M102.807 235H400.222L400.136 232.5H102.891L102.807 235Z" fill={secondaryColor} />
                        <path d="M1 229.5C42.4007 133.648 66.8876 65.922 106.5 47.0001C101.513 50.4425 100.246 111.656 101.171 116.147C101.251 115.052 101.362 114.838 101.5 115.75C101.371 116.485 101.26 116.582 101.171 116.147C100.603 123.872 101.516 175.444 104.5 184.5L69 259.948L1 229.5Z" fill={tertiaryColor} />
                        <path d="M500.5 229.5C452.603 101.711 429.336 58.902 395 47.0001C402.016 68.908 403.384 84.0853 401.75 115.75C404.098 141.813 403.076 156.934 398.5 184.5L434 259.948L500.5 229.5Z" fill={tertiaryColor} />
                        <path d="M251.5 84C216.567 62.2368 200.4 46.4579 179.5 10L177 12C195.791 47.0909 213.183 62.9048 251.5 87C291.12 63.5422 306.029 46.188 327 12L324.5 10.5C302.025 46.5305 286.208 62.824 251.5 84Z" fill={tertiaryColor} />
                        <path d="M1 229.5C42.4007 133.648 66.8876 65.922 106.5 47.0001C101.029 50.7761 100.036 124.064 101.5 115.75C100.385 108.401 101.093 174.161 104.5 184.5L69 259.948L1 229.5ZM395 47.0001C429.336 58.902 452.603 101.711 500.5 229.5L434 259.948L398.5 184.5C403.076 156.934 404.098 141.813 401.75 115.75C403.384 84.0853 402.016 68.908 395 47.0001ZM179.5 10C200.4 46.4579 216.567 62.2368 251.5 84C286.208 62.824 302.025 46.5305 324.5 10.5L327 12C306.029 46.188 291.12 63.5422 251.5 87C213.183 62.9048 195.791 47.0909 177 12L179.5 10Z" stroke="black" />
                        <image x="476" y="232" height="50" width="50" style={{ transform: "rotate(-19deg)", transformOrigin: "50% 50%", WebkitClipPath: `url("#left-logo-cut")` }} className={`${className === 'avatar' ? "avatar " : ""}display-image left`} href={leftArmLogo} alt="Left arm logo display." />
                        <image x="-23" y="235" height="50" width="50" style={{ transform: "rotate(19deg)", transformOrigin: "50% 50%", WebkitClipPath: `url("#right-logo-cut")` }} className={`${className === 'avatar' ? "avatar " : ""}display-image right`} href={rightArmLogo} alt="Right arm logo display." />
                    </svg>

                </>
            )
        case "striper-back":
            return (
                <>
                    <svg className={className} viewBox="0 0 500 557" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" alt="Stripe Jersey Model">
                        <title>Stripe Jersey Model</title>
                        <desc>This jersey model is made of a body that has gradient stripes to create an interesting striping effect.</desc>
                        <defs>
                            <clipPath id={`left-logo-${name}`}>
                                <rect x="460" y="115" width="41" height="500" style={{ transform: "rotate(-3deg)", transformOrigin: "50% 50%" }} />
                            </clipPath>
                            <clipPath id={`right-logo-${name}`}>
                                <rect x="0" y="28" width="41" height="500" style={{ transform: "rotate(3deg)", transformOrigin: "50% 50%" }} />
                            </clipPath>
                        </defs>
                        <path d="M186 9c53.416 10.433 82.002 9.687 132.5-.5l.5-1 76 40c13.448 31.422 15.85 84.316 3.5 137.5l3 88v113.5h-300v-112l3-89.5c-13.555-56.576-7.767-104.708 2-137.5L184 7l2 2z" fill={primaryColor} />
                        <path d="M186 9c1.004 3.117 1.848 4.77 4 7.5 48.015 8.423 75.046 8.548 123.5 0 2.51-3.33 3.74-5.13 5-8M186 9c53.416 10.433 82.002 9.687 132.5-.5M186 9l-2-2-77.5 40.5c-9.767 32.792-15.555 80.924-2 137.5l-3 89.5v112h300V273l-3-88c12.35-53.184 9.948-106.078-3.5-137.5l-76-40-.5 1" stroke="#000" />
                        <path d="M101.5 274.5l-32.5-14 35.5-75.5-1.609 48-.084 2.5-.469 14-.151 4.5-.419 12.5-.167 5-.101 3zM434 260.5L398.5 185l1.636 48 .086 2.5.477 14 .153 4.5.426 12.5.171 5 .051 1.5 32.5-12.5zM101.5 386.5v127c41 49.5 52.5 44 150.5 44 108 0 105 5.5 149.5-44v-127h-300zM101.5 381.5v-13h300v13h-300zM101.5 363v-11.5h300V363h-300zM101.5 344.5v-10h300v10h-300zM101.5 326.5v-9h300v9h-300zM101.5 308v-6.5h300v6.5h-300zM101.5 290v-6h300v6h-300z" fill={secondaryColor} />
                        <path d="M101.601 271.5h299.848l-.171-5h-299.51l-.167 5zM102.187 254h298.665l-.153-4.5H102.338l-.151 4.5zM102.807 235.5h297.415l-.086-2.5H102.891l-.084 2.5zM184.5 7L195 1c28.001 3.586 91.001 4.557 111.5 0l12 6c-20 15-126.5 11.242-134 0z" fill={secondaryColor} />
                        <path d="M101.601 271.5l-.101 3-32.5-14 35.5-75.5-1.609 48m-1.29 38.5h299.848m-299.848 0l.167-5m299.681 5l.051 1.5 32.5-12.5-35.5-75.5 1.636 48m1.313 38.5l-.171-5m0 0h-299.51m299.51 0l-.426-12.5m-299.084 12.5l.419-12.5m0 0h298.665m-298.665 0l.151-4.5m298.514 4.5l-.153-4.5m0 0H102.338m298.361 0l-.477-14m-297.884 14l.469-14m0 0h297.415m-297.415 0l.084-2.5m297.331 2.5l-.086-2.5m0 0H102.891M184.5 7L195 1c28.001 3.586 91.001 4.557 111.5 0l12 6c-20 15-126.5 11.242-134 0zm-83 379.5v127c41 49.5 52.5 44 150.5 44 108 0 105 5.5 149.5-44v-127h-300zm0-5v-13h300v13h-300zm0-18.5v-11.5h300V363h-300zm0-18.5v-10h300v10h-300zm0-18v-9h300v9h-300zm0-18.5v-6.5h300v6.5h-300zm0-18v-6h300v6h-300z" stroke="#000" />
                        <path d="M188.5 13.5c53.633 12.141 80.631 10.88 125.5 0l1.5 3c-52.413 11.485-80.605 11.356-129 0l2-3zM106.5 47.5C66.888 66.422 42.4 134.148 1 230l68 30.448L104.5 185c-2.984-9.056-3.897-60.628-3.329-68.353-.925-4.491.342-65.704 5.329-69.147zM395 47.5c34.336 11.902 57.603 54.711 105.5 182.5L434 260.448 398.5 185c4.576-27.566 5.598-42.687 3.25-68.75 1.634-31.665.266-46.842-6.75-68.75z" fill={tertiaryColor} />
                        <path d="M101.171 116.647c-.568 7.725.345 59.297 3.329 68.353L69 260.448 1 230C42.4 134.148 66.888 66.422 106.5 47.5c-4.987 3.443-6.254 64.656-5.329 69.147zm0 0c.089.435.2.338.329-.397-.138-.912-.249-.698-.329.397zM395 47.5c34.336 11.902 57.603 54.711 105.5 182.5L434 260.448 398.5 185c4.576-27.566 5.598-42.687 3.25-68.75 1.634-31.665.266-46.842-6.75-68.75zm-206.5-34c53.633 12.141 80.631 10.88 125.5 0l1.5 3c-52.413 11.485-80.605 11.356-129 0l2-3z" stroke="#000" />
                        <image x="476" y="232" height="50" width="50" style={{ transform: "rotate(-19deg)", transformOrigin: "50% 50%", WebkitClipPath: `url("#left-logo-${name}")` }} className={`${className === 'avatar' ? "avatar " : ""}display-image left`} href={rightArmLogo} alt="Left arm logo display." />
                        <image x="-23" y="235" height="50" width="50" style={{ transform: "rotate(19deg)", transformOrigin: "50% 50%", WebkitClipPath: `url("#right-logo-${name}")` }} className={`${className === 'avatar' ? "avatar " : ""}display-image right`} href={leftArmLogo} alt="right arm logo display." />
                    </svg>
                </>
            )
        case "solid-front":
            return (
                <>
                    <svg className={className} onClick={handleClick} viewBox="0 0 396 442" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" alt="Solid Jersey Model.">
                        <title>Solid Jersey Model</title>
                        <desc>This jersey model is one solid color. </desc>
                        <defs>
                            <clipPath id={`left-logo-${name}`}>
                                <rect x="355" y="112" width="41" height="500" style={{ transform: "rotate(-4deg)", transformOrigin: "50% 50%" }} />
                            </clipPath>
                            <clipPath id={`right-logo-${name}`}>
                                <rect x="0" y="28" width="41" height="500" style={{ transform: "rotate(6deg)", transformOrigin: "50% 50%" }} />
                            </clipPath>
                        </defs>
                        <path d="M144.224 6.3231C186.444 14.5696 209.038 13.9798 248.951 5.92791L249.346 5.13751L309.417 36.7534C346.693 57.1961 364.277 98.2022 394.5 181.5L314.554 214.988L316.926 403.5C286.5 439.5 280.5 441 195 441C111.5 439.5 109 441 79.8062 403.5L77.4351 216.174L1 181.5C34.559 92.5928 51.7431 53.7199 81.387 36.7534L142.643 4.74231L144.224 6.3231Z" fill={primaryColor} />
                        <path d="M144.224 6.3231C145.017 8.78703 145.684 10.0938 147.385 12.2511C185.336 18.9083 206.702 19.0076 244.999 12.2511C246.984 9.6197 247.955 8.19605 248.951 5.92791M144.224 6.3231C186.444 14.5696 209.038 13.9798 248.951 5.92791M144.224 6.3231L142.643 4.74231L81.387 36.7534M248.951 5.92791L249.346 5.13751L309.417 36.7534M81.387 36.7534C51.7431 53.7199 34.559 92.5928 1 181.5L77.4351 216.174M81.387 36.7534C76.1886 71.7431 76.5565 91.394 79.411 126.464C84.4657 168.557 81.7274 185.406 77.4351 216.174M77.4351 216.174L79.8062 403.5C109 441 111.5 439.5 195 441C280.5 441 286.5 439.5 316.926 403.5L314.554 214.988M314.554 214.988L394.5 181.5C364.277 98.2022 346.693 57.1961 309.417 36.7534M314.554 214.988C310.755 185.743 308.388 169.819 311.986 125.871C314.274 89.0479 312.35 70.3715 309.417 36.7534" stroke="black" />
                        <path d="M144.224 11.4608C184.351 19.841 206.848 18.7188 246.975 11.4608C231.8 34.733 220.466 45.1401 196.785 60.4655C171.622 46.2765 160.018 35.649 144.224 11.4608Z" fill="#505050" stroke="black" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M151.337 0L142.766 4.02401L140 5.5C153.437 31.9783 181.767 58.0942 196.39 63.2318C214.174 54.5374 237.593 32.582 252 6L249 4.3L239.466 0C223.264 3.6015 173.469 2.83404 151.337 0ZM249 4.3C230.174 31.2054 209.86 49.8136 196.39 55.723C170.664 41.4792 159.013 29.2466 142.766 4.02401C146.797 15.5948 246.803 13.0702 249 4.3Z" fill={secondaryColor} />
                        <path d="M8.5 162L80.5 193.5L80 196.5L7.5 164.5L8.5 162Z" fill={secondaryColor} />
                        <path d="M3 176.5L78 210L77.5 213L2 179L3 176.5Z" fill={secondaryColor} />
                        <path d="M386.5 161.5L312.5 194L313 197L387.5 164L386.5 161.5Z" fill={secondaryColor} />
                        <path d="M392 176L314.5 210.5L315 213.5L393 178.5L392 176Z" fill={secondaryColor} />
                        <path d="M79 206L4.5 173.5L3.5 176.5L78 210L79 206Z" fill={tertiaryColor} />
                        <path d="M7.5 164.5L80 196.5L79 200.5L6.5 167.5L7.5 164.5Z" fill={tertiaryColor} />
                        <path d="M313.5 206.5L391 173L392 176L314.5 210.5L313.5 206.5Z" fill={tertiaryColor} />
                        <path d="M387.5 163.866L312.5 197L313 201.5L388.5 167L387.5 163.866Z" fill={tertiaryColor} />
                        <image x="368" y="156" height="50" width="50" style={{ transform: "rotate(-19deg)", transformOrigin: "50% 50%", WebkitClipPath: `url("#left-logo-${name}")` }} className={`${className === 'avatar' ? "avatar " : null}display-image left`} href={leftArmLogo} alt="Left arm logo display." />
                        <image x="-23" y="161" height="50" width="50" style={{ transform: "rotate(19deg)", transformOrigin: "50% 50%", WebkitClipPath: `url("#right-logo-${name}` }} className={`${className === 'avatar' ? "avatar " : null}display-image right`} href={rightArmLogo} alt="Right arm logo display." />
                    </svg>
                </>
            )
        case "solid-back":
            return (
                <>
                    <svg className={className} onClick={handleClick} viewBox="0 0 396 442" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" alt="Solid Jersey Model">
                        <title>Solid Jersey Model</title>
                        <desc>This jersey model is one solid color. </desc>
                        <defs>
                            <clipPath id={`left-logo-${name}`}>
                                <rect x="355" y="112" width="41" height="500" style={{ transform: "rotate(-4deg)", transformOrigin: "50% 50%" }} />
                            </clipPath>
                            <clipPath id={`right-logo-${name}`}>
                                <rect x="0" y="28" width="41" height="500" style={{ transform: "rotate(4deg)", transformOrigin: "50% 50%" }} />
                            </clipPath>
                        </defs>
                        <path d="M81.387 36.7534L142.643 4.74231L249.346 5.13751L309.417 36.7534C346.693 57.1961 364.277 98.2022 394.5 181.5L314.554 214.988L316.926 403.5C286.5 439.5 280.5 441 195 441C111.5 439.5 109 441 79.8062 403.5L77.4351 216.174L1 181.5C34.559 92.5928 51.7431 53.7199 81.387 36.7534Z" fill={primaryColor} />
                        <path d="M81.387 36.7534L142.643 4.74231L249.346 5.13751L309.417 36.7534M81.387 36.7534C51.7431 53.7199 34.559 92.5928 1 181.5L77.4351 216.174M81.387 36.7534C76.1886 71.7431 76.5565 91.394 79.411 126.464C84.4657 168.557 81.7274 185.406 77.4351 216.174M77.4351 216.174L79.8062 403.5C109 441 111.5 439.5 195 441C280.5 441 286.5 439.5 316.926 403.5L314.554 214.988M314.554 214.988L394.5 181.5C364.277 98.2022 346.693 57.1961 309.417 36.7534M314.554 214.988C310.755 185.743 308.388 169.819 311.986 125.871C314.274 89.0479 312.35 70.3715 309.417 36.7534" stroke="black" />
                        <path d="M8.49997 162L80.5 193.5L80 196.5L7.49997 164.5L8.49997 162Z" fill={secondaryColor} />
                        <path d="M2.99997 176.5L78 210L77.5 213L1.99997 179L2.99997 176.5Z" fill={secondaryColor} />
                        <path d="M386.5 161.5L312.5 194L313 197L387.5 164L386.5 161.5Z" fill={secondaryColor} />
                        <path d="M392 176L314.5 210.5L315 213.5L393 178.5L392 176Z" fill={secondaryColor} />
                        <path d="M142.766 4.02401L151.337 0C173.469 2.83404 223.264 3.6015 239.466 0L249 4.3C246.803 13.0702 146.797 15.5948 142.766 4.02401Z" fill={secondaryColor} />
                        <path d="M79 206L4.5 173.5L3.5 176.5L78 210L79 206Z" fill={tertiaryColor} />
                        <path d="M7.5 164.5L80 196.5L79 200.5L6.5 167.5L7.5 164.5Z" fill={tertiaryColor} />
                        <path d="M313.5 206.5L391 173L392 176L314.5 210.5L313.5 206.5Z" fill={tertiaryColor} />
                        <path d="M387.5 163.866L312.5 197L313 201.5L388.5 167L387.5 163.866Z" fill={tertiaryColor} />
                        <path d="M144 5.5C185.438 13.574 208.168 13.1615 248 5.5L243 12.5C205.505 18.982 184.794 19.3182 148.5 13L148.39 12.8404C145.348 8.43117 143.609 5.90987 144 5.5Z" fill={tertiaryColor} />
                        <image x="368" y="156" height="50" width="50" style={{ transform: "rotate(-19deg)", transformOrigin: "50% 50%", WebkitClipPath: `url("#left-logo-${name}")` }} className={`${className === 'avatar' ? "avatar " : ""}display-image left`} href={rightArmLogo} alt="Left arm logo display." />
                        <image x="-23" y="161" height="50" width="50" style={{ transform: "rotate(19deg)", transformOrigin: "50% 50%", WebkitClipPath: `url("#right-logo-${name}")` }} className={`${className === 'avatar' ? "avatar " : ""}display-image right`} href={leftArmLogo} alt="right arm logo display." />
                    </svg>
                </>
            )
        case "hamburger":
            return (
                <>
                    <svg className={className} onClick={handleClick} viewBox="0 0 296 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" alt="Hamburger menu button.">
                        <title>Hamburger Menu</title>
                        <desc>This icon represents a button to push to open the menu.</desc>
                        <rect x="1.5" y="1.5" width="293" height="97" rx="6.5" stroke="black" strokeWidth="3" />
                        <rect x="23.5" y="22.5" width="83" height="11" rx="5.5" fill="black" stroke="black" />
                        <rect x="23" y="44" width="84" height="12" rx="6" fill="black" />
                        <rect x="23.5" y="65.5" width="83" height="11" rx="5.5" fill="black" stroke="black" />
                        <path d="M168.905 66H158.857V45.264H158.281L154.505 66H144.201L140.617 45.264H139.977V66H130.057L131.401 26.256H145.801L149.385 47.76H149.897L153.353 26.256H167.561L168.905 66ZM186.033 43.728C184.923 43.728 184.198 44.112 183.857 44.88C183.515 45.6053 183.345 46.736 183.345 48.272H188.913V46.736C188.913 44.7307 187.953 43.728 186.033 43.728ZM186.289 34.576C190.683 34.576 193.819 35.6427 195.697 37.776C197.617 39.8667 198.577 42.8747 198.577 46.8C198.577 47.312 198.427 49.616 198.129 53.712H183.537C183.537 56.912 185.009 58.512 187.953 58.512C189.361 58.512 192.113 58.0213 196.209 57.04L197.105 64.976C193.521 66.0853 189.937 66.64 186.353 66.64C181.958 66.64 178.587 65.2107 176.241 62.352C173.894 59.4507 172.721 55.5253 172.721 50.576C172.721 39.9093 177.243 34.576 186.289 34.576ZM212.233 37.584C214.58 35.5787 217.161 34.576 219.977 34.576C222.793 34.576 224.756 35.2373 225.865 36.56C227.017 37.84 227.593 39.7813 227.593 42.384V66H216.713V46.032C216.713 44.9653 216.244 44.432 215.305 44.432C214.11 44.432 213.108 44.7307 212.297 45.328V66H201.545V35.344H211.337L211.977 37.584H212.233ZM239.036 66.64C233.959 66.64 231.42 63.824 231.42 58.192V35.344H242.3V55.568C242.3 56.6347 242.769 57.168 243.708 57.168C244.903 57.168 245.905 56.8693 246.716 56.272V35.344H257.468V65.872H247.292V63.632H247.036C244.689 65.6373 242.023 66.64 239.036 66.64Z" fill="black" />
                    </svg>
                </>
            )
        case "arrow-left":
            return (
                <>
                    <svg className={className} viewBox="0 0 73 60" fill="none" role="img" alt={alt} >
                        <path
                            d="M68 30H7m0 0l22.454 25M7 30L29.454 5"
                            stroke="#000"
                            strokeWidth={10}
                            strokeLinecap="round"
                        />
                    </svg>
                </>
            )
        case "arrow-right":
            return (
                <>
                    <svg className={className} viewBox="0 0 73 60" fill="none" role="img" alt={alt}>
                        <path
                            d="M5 30h61m0 0L43.546 5M66 30L43.546 55"
                            stroke="#000"
                            strokeWidth={10}
                            strokeLinecap="round"
                        />
                    </svg>
                </>
            )
        case "increase-font-size":
            return (
                <>
                    <svg className={className} style={style} viewBox="0 0 118 48" fill="none" role="img" alt="Increase jersey font size.">
                        <path
                            d="M98.5 44V9m0 0L83 21.883M98.5 9L114 21.883"
                            stroke="#000"
                            strokeWidth={10}
                            strokeLinecap="round"
                        />
                        <path
                            d="M24.469 36.46H14.437c-.5 1.657-.75 2.759-.75 3.306 0 .578.133 1.039.399 1.382.266.344.586.579.96.704.376.125.75.226 1.126.304.39.078.719.188.984.328.266.141.399.352.399.633 0 3.406-.727 5.469-2.18 6.188C13.828 49.102 11.727 49 9.07 49c-2.656 0-4.758.102-6.304.305-.938-.61-1.407-2.242-1.407-4.899 0-.734.141-1.281.422-1.64.297-.36.68-.594 1.149-.703.484-.11.976-.22 1.476-.329.516-.109 1.032-.375 1.547-.797.531-.421.945-1.03 1.242-1.828l5.742-15.023c.376-.984.563-1.703.563-2.156 0-.36-.07-.617-.21-.774a.8.8 0 00-.493-.304 33.017 33.017 0 00-.586-.141c-.188-.063-.352-.211-.492-.445-.14-.235-.211-.578-.211-1.032 0-1.53.164-2.78.492-3.75.328-.968.688-1.539 1.078-1.71 2.656.218 5.594.328 8.813.328 2.953 0 5.195-.11 6.726-.329.328.11.649.579.961 1.407l7.313 19.664c.703 1.906 1.46 3.593 2.273 5.062.828 1.469 1.508 2.203 2.04 2.203.28.047.491.094.632.141a2 2 0 01.539.21c.219.11.375.267.469.47.093.203.14.453.14.75 0 1.11-.164 2.258-.492 3.445-.312 1.172-.758 1.898-1.336 2.18-1.75-.203-4.242-.305-7.476-.305-4.282 0-7.477.102-9.586.305-.578-.282-1.032-1.008-1.36-2.18a13.52 13.52 0 01-.468-3.445c0-.297.047-.547.14-.75.11-.203.258-.36.446-.47.203-.108.382-.187.539-.233.172-.047.39-.086.656-.118.812-.015 1.219-.703 1.219-2.062 0-1.172-.266-2.367-.797-3.586zm-1.032-3.983c-.296-.922-1.101-3.25-2.414-6.985a33.594 33.594 0 00-.28-.797c-.141-.422-.25-.726-.329-.914a5.736 5.736 0 00-.234-.586c-.078-.218-.149-.367-.211-.445-.063-.078-.117-.117-.164-.117-.14 0-.453.648-.938 1.945l-2.906 7.899h7.476zm37.946 13.617a9.119 9.119 0 01-3.516 2.648c-1.406.594-2.851.89-4.336.89-1.422 0-2.664-.21-3.726-.632-1.063-.438-1.899-1.031-2.508-1.781a8.001 8.001 0 01-1.36-2.508 9.655 9.655 0 01-.445-2.977c0-1.047.102-1.984.305-2.812.219-.844.5-1.563.844-2.156.359-.594.82-1.11 1.382-1.547a7.496 7.496 0 011.758-1.032c.61-.265 1.32-.476 2.133-.632a19.234 19.234 0 012.414-.305 33.177 33.177 0 012.625-.094c.578 0 1.164.024 1.758.07.61.047 1.07.102 1.383.165l.468.07v-2.766c0-.922-.18-1.57-.539-1.945-.359-.375-.968-.563-1.828-.563-.75 0-1.539.118-2.367.352-.828.234-1.562.523-2.203.867-.64.328-1.234.664-1.781 1.008-.547.328-.969.61-1.266.844l-.422.351c-.734 0-1.297-.234-1.687-.703-.375-.468-.563-1.14-.563-2.015 0-.72.149-1.36.446-1.922a4.608 4.608 0 011.171-1.43c.485-.39 1.094-.719 1.829-.984.75-.282 1.476-.492 2.18-.633a18.572 18.572 0 012.46-.352 32.422 32.422 0 012.461-.164c.703-.031 1.5-.047 2.39-.047 1.594 0 2.977.118 4.15.352 1.187.234 2.187.617 3 1.148.812.516 1.476 1.118 1.991 1.805.532.688.938 1.563 1.22 2.625.28 1.047.476 2.14.585 3.281.11 1.125.164 2.477.164 4.055v1.078c0 .234.008.563.024.984.015.407.039.72.07.938l.117.773c.063.297.133.532.211.704.094.156.195.328.305.515.125.172.273.305.445.399.172.093.367.164.586.21.016 0 .11.008.281.024.188 0 .328.023.422.07.11.032.234.102.375.211.14.11.242.29.305.54.078.234.117.538.117.913 0 .328-.04.852-.117 1.57-.078.704-.281 1.524-.61 2.462-.312.922-.71 1.46-1.195 1.617a10.729 10.729 0 01-.656-.188c-.36-.093-.617-.156-.774-.187-.14-.016-.406-.055-.796-.117-.391-.047-.829-.078-1.313-.094a52.377 52.377 0 00-1.71-.024c-1.095 0-2.11.04-3.048.118-.922.078-1.531.117-1.828.117-.578 0-1.172-1.055-1.781-3.164zm-1.055-3.446c.156-.765.234-2.492.234-5.18 0-.5-.101-.82-.304-.96-.188-.14-.742-.211-1.664-.211-.797 0-1.414.305-1.852.914-.437.594-.656 1.445-.656 2.555 0 1.062.187 2.039.562 2.93.375.89.899 1.335 1.57 1.335.407 0 .829-.148 1.266-.445.453-.313.735-.625.844-.938z"
                            fill="#000"
                        />
                    </svg>
                </>
            )
        case "decrease-font-size":
            return (
                <>
                    <svg className={className} style={style} viewBox="0 0 118 48" fill="none" role="img" alt="Increase jersey font size.">
                        <path
                            d="M98.5 9v35m0 0L114 31.117M98.5 44L83 31.117"
                            stroke="#000"
                            strokeWidth={10}
                            strokeLinecap="round"
                        />
                        <path
                            d="M24.469 36.46H14.437c-.5 1.657-.75 2.759-.75 3.306 0 .578.133 1.039.399 1.382.266.344.586.579.96.704.376.125.75.226 1.126.304.39.078.719.188.984.328.266.141.399.352.399.633 0 3.406-.727 5.469-2.18 6.188C13.828 49.102 11.727 49 9.07 49c-2.656 0-4.758.102-6.304.305-.938-.61-1.407-2.242-1.407-4.899 0-.734.141-1.281.422-1.64.297-.36.68-.594 1.149-.703.484-.11.976-.22 1.476-.329.516-.109 1.032-.375 1.547-.797.531-.421.945-1.03 1.242-1.828l5.742-15.023c.376-.984.563-1.703.563-2.156 0-.36-.07-.617-.21-.774a.8.8 0 00-.493-.304 33.017 33.017 0 00-.586-.141c-.188-.063-.352-.211-.492-.445-.14-.235-.211-.578-.211-1.032 0-1.53.164-2.78.492-3.75.328-.968.688-1.539 1.078-1.71 2.656.218 5.594.328 8.813.328 2.953 0 5.195-.11 6.726-.329.328.11.649.579.961 1.407l7.313 19.664c.703 1.906 1.46 3.593 2.273 5.062.828 1.469 1.508 2.203 2.04 2.203.28.047.491.094.632.141a2 2 0 01.539.21c.219.11.375.267.469.47.093.203.14.453.14.75 0 1.11-.164 2.258-.492 3.445-.312 1.172-.758 1.898-1.336 2.18-1.75-.203-4.242-.305-7.476-.305-4.282 0-7.477.102-9.586.305-.578-.282-1.032-1.008-1.36-2.18a13.52 13.52 0 01-.468-3.445c0-.297.047-.547.14-.75.11-.203.258-.36.446-.47.203-.108.382-.187.539-.233.172-.047.39-.086.656-.118.812-.015 1.219-.703 1.219-2.062 0-1.172-.266-2.367-.797-3.586zm-1.032-3.983c-.296-.922-1.101-3.25-2.414-6.985a33.594 33.594 0 00-.28-.797c-.141-.422-.25-.726-.329-.914a5.736 5.736 0 00-.234-.586c-.078-.218-.149-.367-.211-.445-.063-.078-.117-.117-.164-.117-.14 0-.453.648-.938 1.945l-2.906 7.899h7.476zm37.946 13.617a9.119 9.119 0 01-3.516 2.648c-1.406.594-2.851.89-4.336.89-1.422 0-2.664-.21-3.726-.632-1.063-.438-1.899-1.031-2.508-1.781a8.001 8.001 0 01-1.36-2.508 9.655 9.655 0 01-.445-2.977c0-1.047.102-1.984.305-2.812.219-.844.5-1.563.844-2.156.359-.594.82-1.11 1.382-1.547a7.496 7.496 0 011.758-1.032c.61-.265 1.32-.476 2.133-.632a19.234 19.234 0 012.414-.305 33.177 33.177 0 012.625-.094c.578 0 1.164.024 1.758.07.61.047 1.07.102 1.383.165l.468.07v-2.766c0-.922-.18-1.57-.539-1.945-.359-.375-.968-.563-1.828-.563-.75 0-1.539.118-2.367.352-.828.234-1.562.523-2.203.867-.64.328-1.234.664-1.781 1.008-.547.328-.969.61-1.266.844l-.422.351c-.734 0-1.297-.234-1.687-.703-.375-.468-.563-1.14-.563-2.015 0-.72.149-1.36.446-1.922a4.608 4.608 0 011.171-1.43c.485-.39 1.094-.719 1.829-.984.75-.282 1.476-.492 2.18-.633a18.572 18.572 0 012.46-.352 32.422 32.422 0 012.461-.164c.703-.031 1.5-.047 2.39-.047 1.594 0 2.977.118 4.15.352 1.187.234 2.187.617 3 1.148.812.516 1.476 1.118 1.991 1.805.532.688.938 1.563 1.22 2.625.28 1.047.476 2.14.585 3.281.11 1.125.164 2.477.164 4.055v1.078c0 .234.008.563.024.984.015.407.039.72.07.938l.117.773c.063.297.133.532.211.704.094.156.195.328.305.515.125.172.273.305.445.399.172.093.367.164.586.21.016 0 .11.008.281.024.188 0 .328.023.422.07.11.032.234.102.375.211.14.11.242.29.305.54.078.234.117.538.117.913 0 .328-.04.852-.117 1.57-.078.704-.281 1.524-.61 2.462-.312.922-.71 1.46-1.195 1.617a10.729 10.729 0 01-.656-.188c-.36-.093-.617-.156-.774-.187-.14-.016-.406-.055-.796-.117-.391-.047-.829-.078-1.313-.094a52.377 52.377 0 00-1.71-.024c-1.095 0-2.11.04-3.048.118-.922.078-1.531.117-1.828.117-.578 0-1.172-1.055-1.781-3.164zm-1.055-3.446c.156-.765.234-2.492.234-5.18 0-.5-.101-.82-.304-.96-.188-.14-.742-.211-1.664-.211-.797 0-1.414.305-1.852.914-.437.594-.656 1.445-.656 2.555 0 1.062.187 2.039.562 2.93.375.89.899 1.335 1.57 1.335.407 0 .829-.148 1.266-.445.453-.313.735-.625.844-.938z"
                            fill="#000"
                        />
                    </svg>
                </>
            )
        case "check-mark":
            return (
                <>
                    <svg className={className} viewBox="0 0 120 60" fill="none" role="img" alt="Check yes!" >
                        <path
                            d="M4.183 47.378l20.648 19.81a5 5 0 006.505.36L96.23 17.751a5 5 0 00.688-7.294l-5.255-5.895a5 5 0 00-6.883-.554l-52.906 42.95a5 5 0 01-6.95-.63l-8.897-10.394a5 5 0 00-7.334-.284L4.11 40.235a5 5 0 00.074 7.143z"
                            stroke="#086300"
                            strokeWidth={5}
                        />
                    </svg>
                </>
            )
        case "prohibit":
            return (
                <>
                    <svg className={className} viewBox="0 0 100 100" fill="none" role="img" alt="The sign for general prohibition.">
                        <path
                            d="M66.373 8.071L26.097 88.134C13.424 80.172 5 66.07 5 50 5 25.147 25.147 5 50 5a44.887 44.887 0 0116.373 3.071zM50 95a44.93 44.93 0 01-14.894-2.523l40.118-79.748C87.158 20.82 95 34.495 95 50c0 24.853-20.147 45-45 45z"
                            stroke="#E61B1B"
                            strokeWidth={10}
                        />
                    </svg>
                </>
            )
        case "platypus":
            return (
                <svg className={className} viewBox="0 0 112 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.5 55.5H0.5C4.39165 68.8891 9.06075 72.4607 25.5 66C29.6045 70.1985 31.9035 71.5234 36 72C43.4466 80.2453 49.7857 82.7679 66 82.5C67.0218 84.5111 67.309 85.4711 67.5 87C65.1584 89.3212 63.8436 90.1214 61.5 90.5C55.1907 91.6509 55.3204 92.6587 56 94.5C71.7697 99.4717 76.598 98.2746 74.5 85.5C75.993 81.7555 76.8517 79.9722 78.5 78.5C82.0798 83.3606 85.064 84.2641 93 81C93.6721 76.708 93.341 74.9709 90.5 74L89.5 76.5C85.3351 75.8396 84.2088 74.7619 85 73.5C96.3856 65.3961 101.121 59.3318 102.5 42C104.656 48.4911 106.563 49.7606 111 48.5L111.004 48.3421C111.29 35.9561 111.452 28.9629 100 29.5C94.9417 16.6881 90.2638 12.8611 77 15C66 -2.50002 40 -3.50005 36 11.5C34.8343 15.4049 37.1239 16.0517 43.5 16C54.3201 13.3998 59.4679 14.5852 67.5 20C60.8521 29.1917 62.4636 34.9024 64.5 45C60.5049 48.6242 57.8149 50.1048 52 51.5C40 47.5 29.7936 45.5421 27.5 55.5Z" fill="black" />
                    <path d="M111 48.5C106.563 49.7606 104.656 48.4911 102.5 42C101.121 59.3318 96.3856 65.3961 85 73.5C84.2088 74.7619 85.3351 75.8396 89.5 76.5L90.5 74C93.341 74.9709 93.6721 76.708 93 81C85.064 84.2641 82.0798 83.3606 78.5 78.5C76.8517 79.9722 75.9929 81.7555 74.5 85.5C76.598 98.2746 71.7697 99.4717 56 94.5C55.3204 92.6587 55.1907 91.6509 61.5 90.5C63.8436 90.1214 65.1584 89.3212 67.5 87C67.309 85.4711 67.0217 84.5111 66 82.5C49.7857 82.7679 43.4466 80.2453 36 72C31.9035 71.5234 29.6045 70.1985 25.5 66C9.06075 72.4607 4.39165 68.8891 0.5 55.5H27.5C29.7936 45.5421 40 47.5 52 51.5C57.8149 50.1048 60.5049 48.6242 64.5 45C62.4636 34.9024 60.8521 29.1917 67.5 20C59.4679 14.5852 54.3201 13.3998 43.5 16C37.1239 16.0517 34.8343 15.4049 36 11.5C40 -3.50005 66 -2.50002 77 15C90.2638 12.8611 94.9417 16.6881 100 29.5C111.452 28.9629 111.29 35.9561 111.004 48.3421M111 48.5L111.004 48.3421M111 48.5C111.001 48.4472 111.002 48.3946 111.004 48.3421" stroke="black" strokeWidth="0.3" />
                </svg>

            )
        default:
            return <svg className={className} role="img">
                <title>Forgotten SVG!</title>
                <desc>It appears that, during the creation of this app, someone forgot to name this svg. Uh oh!</desc>
                <path d="" />
            </svg>
    }
}

const SVG = ({ name, className, style, handleClick, title, desc, alt }) => {

    const [{ leftArmLogo, rightArmLogo, primaryColor, secondaryColor, tertiaryColor }] = useStateValue()

    return (
        getPath(
            name,
            primaryColor,
            secondaryColor,
            tertiaryColor,
            className,
            style,
            handleClick,
            leftArmLogo,
            rightArmLogo,
            title,
            desc,
            alt)
    )
}

SVG.propTypes = {
    name: PropTypes.string.isRequired,
}

export default SVG
