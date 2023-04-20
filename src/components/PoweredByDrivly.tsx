'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function PoweredByDrivly(props: any) {
  return (
    <motion.svg
      strokeDasharray='0 1'
      width='130'
      height='27'
      viewBox='0 0 130 27'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <motion.path
        strokeDasharray='0 1'
        initial={{ pathLength: 0, animationFillMode: 'forwards' }}
        animate={{ pathLength: 1, animationFillMode: 'forwards' }}
        transition={{ delay: 0.1, type: 'tween', ease: 'easeOut', duration: 1 }}
        d='M3.71527 17.5889V8.86159H6.66414C7.3488 8.86159 7.90846 8.98517 8.34311 9.23233C8.78061 9.47665 9.10448 9.80762 9.3147 10.2252C9.52493 10.6428 9.63005 11.1088 9.63005 11.623C9.63005 12.1372 9.52493 12.6045 9.3147 13.0249C9.10732 13.4454 8.7863 13.7806 8.35164 14.0306C7.91698 14.2778 7.36016 14.4014 6.68118 14.4014H4.56755V13.4639H6.64709C7.11584 13.4639 7.49226 13.3829 7.77635 13.221C8.06044 13.059 8.26641 12.8403 8.39425 12.5647C8.52493 12.2863 8.59027 11.9724 8.59027 11.623C8.59027 11.2735 8.52493 10.961 8.39425 10.6855C8.26641 10.4099 8.05902 10.194 7.77209 10.0377C7.48516 9.87864 7.10448 9.79909 6.63005 9.79909H4.77209V17.5889H3.71527ZM13.9049 17.7252C13.314 17.7252 12.7955 17.5846 12.3495 17.3034C11.9063 17.0221 11.5597 16.6286 11.3097 16.123C11.0625 15.6173 10.939 15.0264 10.939 14.3502C10.939 13.6684 11.0625 13.0732 11.3097 12.5647C11.5597 12.0562 11.9063 11.6613 12.3495 11.3801C12.7955 11.0988 13.314 10.9582 13.9049 10.9582C14.4958 10.9582 15.0128 11.0988 15.456 11.3801C15.902 11.6613 16.2486 12.0562 16.4958 12.5647C16.7458 13.0732 16.8708 13.6684 16.8708 14.3502C16.8708 15.0264 16.7458 15.6173 16.4958 16.123C16.2486 16.6286 15.902 17.0221 15.456 17.3034C15.0128 17.5846 14.4958 17.7252 13.9049 17.7252ZM13.9049 16.8218C14.3537 16.8218 14.7231 16.7068 15.0128 16.4767C15.3026 16.2465 15.5171 15.944 15.6563 15.569C15.7955 15.194 15.8651 14.7877 15.8651 14.3502C15.8651 13.9127 15.7955 13.5051 15.6563 13.1272C15.5171 12.7494 15.3026 12.444 15.0128 12.211C14.7231 11.9781 14.3537 11.8616 13.9049 11.8616C13.456 11.8616 13.0867 11.9781 12.7969 12.211C12.5071 12.444 12.2927 12.7494 12.1535 13.1272C12.0143 13.5051 11.9446 13.9127 11.9446 14.3502C11.9446 14.7877 12.0143 15.194 12.1535 15.569C12.2927 15.944 12.5071 16.2465 12.7969 16.4767C13.0867 16.7068 13.456 16.8218 13.9049 16.8218ZM19.7862 17.5889L17.7919 11.0434H18.8487L20.2635 16.0548H20.3317L21.7294 11.0434H22.8033L24.184 16.0377H24.2521L25.6669 11.0434H26.7237L24.7294 17.5889H23.7408L22.309 12.5605H22.2067L20.7749 17.5889H19.7862ZM30.6949 17.7252C30.0643 17.7252 29.5202 17.586 29.0628 17.3076C28.6083 17.0264 28.2574 16.6343 28.0103 16.1315C27.766 15.6258 27.6438 15.0377 27.6438 14.3673C27.6438 13.6968 27.766 13.1059 28.0103 12.5945C28.2574 12.0803 28.6012 11.6798 29.0415 11.3928C29.4847 11.1031 30.0018 10.9582 30.5927 10.9582C30.9336 10.9582 31.2702 11.015 31.6026 11.1286C31.935 11.2423 32.2376 11.4269 32.5103 11.6826C32.783 11.9355 33.0003 12.2707 33.1623 12.6883C33.3242 13.1059 33.4052 13.6201 33.4052 14.2309V14.657H28.3597V13.7877H32.3824C32.3824 13.4184 32.3086 13.0889 32.1609 12.7991C32.016 12.5093 31.8086 12.2806 31.5387 12.113C31.2717 11.9454 30.9563 11.8616 30.5927 11.8616C30.1921 11.8616 29.8455 11.961 29.5529 12.1599C29.2631 12.3559 29.0401 12.6116 28.8839 12.9269C28.7276 13.2423 28.6495 13.5803 28.6495 13.9411V14.5207C28.6495 15.015 28.7347 15.434 28.9052 15.7778C29.0785 16.1187 29.3185 16.3786 29.6253 16.5576C29.9322 16.7338 30.2887 16.8218 30.6949 16.8218C30.9592 16.8218 31.1978 16.7849 31.4109 16.711C31.6268 16.6343 31.8128 16.5207 31.9691 16.3701C32.1253 16.2167 32.2461 16.0264 32.3313 15.7991L33.3029 16.0718C33.2006 16.4014 33.0288 16.6911 32.7873 16.9411C32.5458 17.1883 32.2475 17.3815 31.8924 17.5207C31.5373 17.657 31.1381 17.7252 30.6949 17.7252ZM35.055 17.5889V11.0434H36.0266V12.032H36.0948C36.2141 11.7082 36.43 11.4454 36.7425 11.2437C37.055 11.042 37.4073 10.9411 37.7993 10.9411C37.8732 10.9411 37.9655 10.9426 38.0763 10.9454C38.1871 10.9482 38.2709 10.9525 38.3277 10.9582V11.9809C38.2936 11.9724 38.2155 11.9596 38.0934 11.9426C37.974 11.9227 37.8476 11.9127 37.7141 11.9127C37.3959 11.9127 37.1118 11.9795 36.8618 12.113C36.6147 12.2437 36.4186 12.4255 36.2738 12.6585C36.1317 12.8886 36.0607 13.1514 36.0607 13.4468V17.5889H35.055ZM42.1849 17.7252C41.5543 17.7252 41.0102 17.586 40.5528 17.3076C40.0983 17.0264 39.7474 16.6343 39.5003 16.1315C39.256 15.6258 39.1338 15.0377 39.1338 14.3673C39.1338 13.6968 39.256 13.1059 39.5003 12.5945C39.7474 12.0803 40.0912 11.6798 40.5315 11.3928C40.9747 11.1031 41.4918 10.9582 42.0827 10.9582C42.4236 10.9582 42.7602 11.015 43.0926 11.1286C43.425 11.2423 43.7276 11.4269 44.0003 11.6826C44.273 11.9355 44.4903 12.2707 44.6523 12.6883C44.8142 13.1059 44.8952 13.6201 44.8952 14.2309V14.657H39.8497V13.7877H43.8724C43.8724 13.4184 43.7986 13.0889 43.6509 12.7991C43.506 12.5093 43.2986 12.2806 43.0287 12.113C42.7616 11.9454 42.4463 11.8616 42.0827 11.8616C41.6821 11.8616 41.3355 11.961 41.0429 12.1599C40.7531 12.3559 40.5301 12.6116 40.3739 12.9269C40.2176 13.2423 40.1395 13.5803 40.1395 13.9411V14.5207C40.1395 15.015 40.2247 15.434 40.3952 15.7778C40.5685 16.1187 40.8085 16.3786 41.1153 16.5576C41.4222 16.7338 41.7787 16.8218 42.1849 16.8218C42.4491 16.8218 42.6878 16.7849 42.9009 16.711C43.1168 16.6343 43.3028 16.5207 43.4591 16.3701C43.6153 16.2167 43.7361 16.0264 43.8213 15.7991L44.7929 16.0718C44.6906 16.4014 44.5188 16.6911 44.2773 16.9411C44.0358 17.1883 43.7375 17.3815 43.3824 17.5207C43.0273 17.657 42.6281 17.7252 42.1849 17.7252ZM49.0166 17.7252C48.4711 17.7252 47.9896 17.5874 47.572 17.3119C47.1544 17.0335 46.8277 16.6414 46.5919 16.1357C46.3561 15.6272 46.2382 15.0264 46.2382 14.3332C46.2382 13.6457 46.3561 13.0491 46.5919 12.5434C46.8277 12.0377 47.1558 11.6471 47.5763 11.3715C47.9967 11.096 48.4825 10.9582 49.0336 10.9582C49.4598 10.9582 49.7964 11.0292 50.0436 11.1713C50.2936 11.3105 50.4839 11.4695 50.6146 11.6485C50.7481 11.8247 50.8518 11.9695 50.9257 12.0832H51.0109V8.86159H52.0166V17.5889H51.045V16.5832H50.9257C50.8518 16.7025 50.7467 16.8531 50.6103 17.0349C50.474 17.2139 50.2794 17.3744 50.0265 17.5164C49.7737 17.6556 49.437 17.7252 49.0166 17.7252ZM49.153 16.8218C49.5564 16.8218 49.8973 16.7167 50.1757 16.5065C50.4541 16.2934 50.6657 15.9994 50.8106 15.6244C50.9555 15.2465 51.028 14.8105 51.028 14.3161C51.028 13.8275 50.9569 13.3999 50.8149 13.0335C50.6728 12.6642 50.4626 12.3772 50.1842 12.1727C49.9058 11.9653 49.562 11.8616 49.153 11.8616C48.7268 11.8616 48.3717 11.971 48.0876 12.1897C47.8064 12.4056 47.5947 12.6997 47.4527 13.0718C47.3135 13.4411 47.2439 13.8559 47.2439 14.3161C47.2439 14.782 47.3149 15.2053 47.4569 15.586C47.6018 15.9639 47.8149 16.265 48.0961 16.4894C48.3802 16.711 48.7325 16.8218 49.153 16.8218ZM57.7495 17.5889V8.86159H58.7552V12.0832H58.8404C58.9143 11.9695 59.0165 11.8247 59.1472 11.6485C59.2807 11.4695 59.4711 11.3105 59.7182 11.1713C59.9682 11.0292 60.3063 10.9582 60.7324 10.9582C61.2836 10.9582 61.7694 11.096 62.1898 11.3715C62.6103 11.6471 62.9384 12.0377 63.1742 12.5434C63.41 13.0491 63.5279 13.6457 63.5279 14.3332C63.5279 15.0264 63.41 15.6272 63.1742 16.1357C62.9384 16.6414 62.6117 17.0335 62.1941 17.3119C61.7765 17.5874 61.2949 17.7252 60.7495 17.7252C60.329 17.7252 59.9924 17.6556 59.7395 17.5164C59.4867 17.3744 59.2921 17.2139 59.1557 17.0349C59.0194 16.8531 58.9143 16.7025 58.8404 16.5832H58.7211V17.5889H57.7495ZM58.7381 14.3161C58.7381 14.8105 58.8106 15.2465 58.9555 15.6244C59.1003 15.9994 59.312 16.2934 59.5904 16.5065C59.8688 16.7167 60.2097 16.8218 60.6131 16.8218C61.0336 16.8218 61.3844 16.711 61.6657 16.4894C61.9498 16.265 62.1628 15.9639 62.3049 15.586C62.4498 15.2053 62.5222 14.782 62.5222 14.3161C62.5222 13.8559 62.4512 13.4411 62.3092 13.0718C62.1699 12.6997 61.9583 12.4056 61.6742 12.1897C61.393 11.971 61.0393 11.8616 60.6131 11.8616C60.204 11.8616 59.8603 11.9653 59.5819 12.1727C59.3035 12.3772 59.0932 12.6642 58.9512 13.0335C58.8092 13.3999 58.7381 13.8275 58.7381 14.3161ZM65.5996 20.0434C65.4292 20.0434 65.2772 20.0292 65.1436 20.0008C65.0101 19.9752 64.9178 19.9497 64.8667 19.9241L65.1223 19.0377C65.3667 19.1002 65.5826 19.123 65.7701 19.1059C65.9576 19.0889 66.1238 19.0051 66.2686 18.8545C66.4164 18.7068 66.5513 18.4667 66.6735 18.1343L66.861 17.623L64.4405 11.0434H65.5314L67.3382 16.2593H67.4064L69.2132 11.0434H70.3042L67.5257 18.5434C67.4007 18.8815 67.2459 19.1613 67.0613 19.3829C66.8766 19.6073 66.6621 19.7735 66.4178 19.8815C66.1763 19.9894 65.9036 20.0434 65.5996 20.0434Z'
        fill='#A2A2A5'
        stroke='#A2A2A5'
        strokeWidth={0.05}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <motion.path
        initial={{ pathLength: 0, fill: '#fff' }}
        animate={{ pathLength: 1, fill: '#000' }}
        transition={{ delay: 0.1, type: 'tween', ease: 'easeOut', duration: 1 }}
        d='M83.671 17.8216C82.9418 17.8216 82.1183 17.7587 81.2005 17.633C80.6976 17.5702 80.3518 17.4381 80.1633 17.237C79.9747 17.0358 79.8929 16.7089 79.9181 16.2563C80.0061 15.0116 80.2135 13.4778 80.5404 11.6548C80.8673 9.81917 81.2634 8.05273 81.7285 6.35543C81.8165 6.04112 81.9926 5.8211 82.2566 5.69537C82.5206 5.56965 82.8664 5.50678 83.2938 5.50678C84.0607 5.50678 84.4442 5.72052 84.4442 6.14798C84.4442 6.324 84.4065 6.52516 84.3311 6.75147C84.0042 7.75727 83.6773 9.10882 83.3504 10.8061C83.0235 12.4908 82.7909 14.1001 82.6526 15.634C83.0298 15.6717 83.4573 15.6906 83.935 15.6906C86.1352 15.6906 87.7759 15.0242 88.8572 13.6915C89.951 12.3588 90.4979 10.5798 90.4979 8.35447C90.4979 6.85833 90.0704 5.70166 89.2155 4.88444C88.3606 4.06722 87.1536 3.65862 85.5946 3.65862C84.5888 3.65862 83.5893 3.81577 82.596 4.13009C81.6154 4.4444 80.729 4.8593 79.9369 5.37477C79.7735 5.48792 79.5975 5.5445 79.4089 5.5445C79.1952 5.5445 79.0254 5.45649 78.8997 5.28048C78.774 5.09189 78.7111 4.86558 78.7111 4.60156C78.7111 4.29982 78.7614 4.05465 78.862 3.86606C78.9626 3.6649 79.1323 3.4826 79.3712 3.31916C80.2387 2.72825 81.2571 2.28192 82.4263 1.98018C83.5956 1.66587 84.7208 1.50871 85.802 1.50871C87.3359 1.50871 88.6623 1.77902 89.7813 2.31964C90.9002 2.84769 91.7614 3.62718 92.3649 4.65813C92.9684 5.68908 93.2701 6.93377 93.2701 8.39219C93.2701 10.2906 92.893 11.9502 92.1386 13.3709C91.3843 14.779 90.2842 15.8729 88.8383 16.6524C87.3925 17.4319 85.67 17.8216 83.671 17.8216Z'
        fill='#000'
        stroke='#000'
        strokeWidth={0.05}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <motion.path
        initial={{ pathLength: 0, fill: '#fff' }}
        animate={{ pathLength: 1, fill: '#000' }}
        transition={{ delay: 0.1, type: 'tween', ease: 'easeOut', duration: 1 }}
        d='M95.6873 17.8216C95.2096 17.8216 94.8701 17.5702 94.6689 17.0673C94.4804 16.5644 94.3861 15.7597 94.3861 14.6533C94.3861 13.0189 94.6187 11.4662 95.0838 9.99519C95.197 9.63058 95.3793 9.36656 95.6307 9.20312C95.8948 9.0271 96.2594 8.93909 96.7246 8.93909C96.976 8.93909 97.152 8.97052 97.2526 9.03339C97.3532 9.09625 97.4035 9.21569 97.4035 9.3917C97.4035 9.59286 97.3092 10.0455 97.1206 10.7495C96.9949 11.2524 96.8943 11.6925 96.8189 12.0697C96.7434 12.4468 96.6806 12.912 96.6303 13.4652C97.0452 12.384 97.5103 11.5039 98.0258 10.825C98.5413 10.1461 99.0442 9.66201 99.5345 9.37284C100.037 9.08368 100.496 8.93909 100.911 8.93909C101.728 8.93909 102.137 9.3477 102.137 10.1649C102.137 10.3284 102.08 10.7244 101.967 11.353C101.867 11.8559 101.816 12.1702 101.816 12.296C101.816 12.736 101.974 12.956 102.288 12.956C102.64 12.956 103.093 12.6794 103.646 12.1262C103.809 11.9628 103.979 11.8811 104.155 11.8811C104.318 11.8811 104.444 11.9565 104.532 12.1074C104.633 12.2457 104.683 12.4343 104.683 12.6731C104.683 13.1383 104.557 13.5029 104.306 13.767C103.954 14.1316 103.539 14.4459 103.061 14.7099C102.596 14.9613 102.099 15.0871 101.571 15.0871C100.905 15.0871 100.396 14.9173 100.044 14.5779C99.7043 14.2384 99.5345 13.7795 99.5345 13.2012C99.5345 13.0126 99.5534 12.824 99.5911 12.6354C99.6162 12.384 99.6288 12.2142 99.6288 12.1262C99.6288 11.9251 99.5597 11.8245 99.4214 11.8245C99.2328 11.8245 98.9813 12.0382 98.667 12.4657C98.3653 12.8806 98.0635 13.4338 97.7618 14.1253C97.4601 14.8168 97.2149 15.546 97.0263 16.3129C96.888 16.9038 96.7246 17.3061 96.536 17.5199C96.36 17.721 96.0771 17.8216 95.6873 17.8216Z'
        fill='#000'
        stroke='#000'
        strokeWidth={0.05}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <motion.path
        initial={{ pathLength: 0, fill: '#fff' }}
        animate={{ pathLength: 1, fill: '#000' }}
        transition={{ delay: 0.1, type: 'tween', ease: 'easeOut', duration: 1 }}
        d='M105.401 7.69441C104.873 7.69441 104.477 7.57497 104.213 7.33609C103.949 7.08464 103.817 6.73889 103.817 6.29885C103.817 5.85881 103.987 5.49421 104.326 5.20504C104.678 4.9033 105.112 4.75243 105.627 4.75243C106.093 4.75243 106.47 4.86558 106.759 5.09189C107.048 5.31819 107.193 5.63879 107.193 6.05369C107.193 6.55659 107.029 6.95891 106.702 7.26065C106.375 7.54982 105.942 7.69441 105.401 7.69441ZM105.25 17.8216C104.433 17.8216 103.836 17.5324 103.459 16.9541C103.094 16.3758 102.912 15.6088 102.912 14.6533C102.912 14.0876 102.981 13.3646 103.119 12.4846C103.27 11.5919 103.459 10.7621 103.685 9.99519C103.798 9.59286 103.949 9.31627 104.138 9.1654C104.326 9.01453 104.628 8.93909 105.043 8.93909C105.684 8.93909 106.005 9.15283 106.005 9.58029C106.005 9.89461 105.885 10.6238 105.646 11.7679C105.345 13.1509 105.194 14.0876 105.194 14.5779C105.194 14.9551 105.244 15.2442 105.345 15.4454C105.445 15.6466 105.615 15.7471 105.854 15.7471C106.08 15.7471 106.363 15.59 106.702 15.2757C107.042 14.9613 107.494 14.4647 108.06 13.7858C108.211 13.6098 108.381 13.5218 108.569 13.5218C108.733 13.5218 108.859 13.5972 108.947 13.7481C109.047 13.899 109.097 14.1064 109.097 14.3704C109.097 14.8733 108.978 15.2631 108.739 15.5397C107.494 17.061 106.331 17.8216 105.25 17.8216Z'
        fill='#000'
        stroke='#000'
        strokeWidth={0.05}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <motion.path
        initial={{ pathLength: 0, fill: '#fff' }}
        animate={{ pathLength: 1, fill: '#000' }}
        transition={{ delay: 0.1, type: 'tween', ease: 'easeOut', duration: 1 }}
        d='M117.091 11.9942C117.129 11.9817 117.192 11.9754 117.28 11.9754C117.468 11.9754 117.613 12.0382 117.713 12.164C117.814 12.2897 117.864 12.4594 117.864 12.6731C117.864 13.0629 117.789 13.3709 117.638 13.5972C117.487 13.811 117.261 13.9681 116.959 14.0687C116.381 14.2573 115.765 14.3516 115.111 14.3516C114.558 14.3516 114.036 14.2761 113.545 14.1253C113.181 14.7162 112.779 15.326 112.339 15.9546C111.836 16.6712 111.402 17.1615 111.037 17.4256C110.673 17.6896 110.258 17.8216 109.793 17.8216C109.277 17.8216 108.868 17.6204 108.567 17.2181C108.278 16.8158 108.095 16.1809 108.02 15.3134C107.869 13.5532 107.794 12.0131 107.794 10.693V10.0329C107.806 9.61801 107.919 9.32884 108.133 9.1654C108.347 9.00195 108.667 8.92023 109.095 8.92023C109.422 8.92023 109.661 8.99567 109.811 9.14654C109.975 9.28484 110.057 9.52372 110.057 9.86317C110.057 11.309 110.145 13.1886 110.321 15.502C111.075 14.383 111.641 13.4904 112.018 12.824C111.829 12.4594 111.735 12.0257 111.735 11.5228C111.735 11.0953 111.829 10.6804 112.018 10.2781C112.206 9.87575 112.464 9.54886 112.791 9.29741C113.118 9.04596 113.489 8.92023 113.904 8.92023C114.268 8.92023 114.564 9.05225 114.79 9.31627C115.016 9.56772 115.13 9.93861 115.13 10.4289C115.13 10.9947 114.979 11.6422 114.677 12.3714C115.155 12.3463 115.79 12.252 116.582 12.0885L117.091 11.9942Z'
        fill='#000'
        stroke='#000'
        strokeWidth={0.05}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <motion.path
        initial={{ pathLength: 0, fill: '#fff' }}
        animate={{ pathLength: 1, fill: '#000' }}
        transition={{ delay: 0.1, type: 'tween', ease: 'easeOut', duration: 1 }}
        d='M123.375 13.5218C123.538 13.5218 123.664 13.5972 123.752 13.7481C123.853 13.899 123.903 14.1064 123.903 14.3704C123.903 14.8733 123.784 15.2631 123.545 15.5397C123.004 16.206 122.413 16.7529 121.772 17.1804C121.143 17.6079 120.427 17.8216 119.622 17.8216C118.516 17.8216 117.692 17.3187 117.152 16.3129C116.624 15.3071 116.36 14.0058 116.36 12.4091C116.36 10.8753 116.554 9.12768 116.944 7.16636C117.347 5.20504 117.931 3.52032 118.698 2.11219C119.478 0.704063 120.402 0 121.47 0C122.074 0 122.545 0.282883 122.885 0.848648C123.237 1.40184 123.413 2.2002 123.413 3.24372C123.413 4.73986 122.998 6.47487 122.168 8.44876C121.338 10.4227 120.213 12.3777 118.792 14.3139C118.88 14.8293 119.025 15.2002 119.226 15.4265C119.427 15.6403 119.691 15.7471 120.018 15.7471C120.534 15.7471 120.986 15.6025 121.376 15.3134C121.766 15.0116 122.262 14.5024 122.866 13.7858C123.017 13.6098 123.186 13.5218 123.375 13.5218ZM121.055 1.86703C120.766 1.86703 120.439 2.38879 120.075 3.43231C119.71 4.47583 119.39 5.77081 119.113 7.31723C118.836 8.86366 118.685 10.3472 118.66 11.7679C119.553 10.2969 120.263 8.82594 120.791 7.35495C121.319 5.87139 121.583 4.51984 121.583 3.3003C121.583 2.34478 121.407 1.86703 121.055 1.86703Z'
        fill='#000'
        stroke='#000'
        strokeWidth={0.05}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <motion.path
        initial={{ pathLength: 0, fill: '#fff' }}
        animate={{ pathLength: 1, fill: '#000' }}
        transition={{ delay: 0.1, type: 'tween', ease: 'easeOut', duration: 1 }}
        d='M128.979 8.93909C129.269 8.93909 129.47 8.97681 129.583 9.05225C129.696 9.12768 129.753 9.25341 129.753 9.42942C129.753 9.73116 129.589 10.8061 129.262 12.6543C128.973 14.427 128.803 15.4768 128.753 15.8037C128.288 19.0349 127.647 21.5934 126.829 23.4793C126.012 25.3651 124.925 26.3081 123.567 26.3081C122.926 26.3081 122.404 26.1069 122.002 25.7046C121.599 25.3149 121.398 24.7994 121.398 24.1582C121.398 23.5673 121.53 22.9638 121.794 22.3477C122.071 21.7317 122.574 21.0213 123.303 20.2167C124.045 19.4246 125.088 18.5131 126.433 17.4821L126.49 17.0484C126.578 16.5832 126.679 15.9169 126.792 15.0494C126.54 15.9546 126.188 16.6461 125.736 17.1238C125.283 17.589 124.805 17.8216 124.302 17.8216C123.737 17.8216 123.271 17.5639 122.907 17.0484C122.555 16.5203 122.379 15.8666 122.379 15.0871C122.379 14.1441 122.442 13.2829 122.567 12.5034C122.693 11.7113 122.901 10.8753 123.19 9.99519C123.315 9.61801 123.491 9.3477 123.718 9.18426C123.944 9.02081 124.302 8.93909 124.793 8.93909C125.069 8.93909 125.258 8.9831 125.358 9.0711C125.472 9.15911 125.528 9.29112 125.528 9.46714C125.528 9.56772 125.459 9.90718 125.321 10.4855C125.195 10.9507 125.094 11.3719 125.019 11.7491C124.918 12.2645 124.83 12.7612 124.755 13.2389C124.68 13.7041 124.642 14.0876 124.642 14.3893C124.642 14.8671 124.774 15.1059 125.038 15.1059C125.226 15.1059 125.459 14.9173 125.736 14.5402C126.025 14.163 126.327 13.5909 126.641 12.824C126.968 12.0571 127.282 11.1141 127.584 9.99519C127.684 9.61801 127.835 9.3477 128.036 9.18426C128.25 9.02081 128.564 8.93909 128.979 8.93909ZM123.774 24.4788C124.089 24.4788 124.441 24.1142 124.83 23.385C125.22 22.6558 125.61 21.4425 126 19.7452C125.032 20.5624 124.328 21.3042 123.887 21.9706C123.46 22.6495 123.246 23.2404 123.246 23.7433C123.246 23.957 123.284 24.133 123.359 24.2713C123.447 24.4096 123.586 24.4788 123.774 24.4788Z'
        fill='#000'
        stroke='#000'
        strokeWidth={0.05}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </motion.svg>
  )
}