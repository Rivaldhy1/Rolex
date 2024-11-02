/* eslint-disable react/prop-types */
const Testimonial = ({ data }) => {
  return (
    <div className="mx-6 md:mx-0 space-y-8 md:w-[338px] xl:w-[450px]">
      <div
        className="p-3 shadow-md bg-white w-fit dark:bg-container-color-dark"
        key={data.id}
      >
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.49999 6.00003C5.27699 6.00003 5.06299 6.03403 4.84999 6.06503C4.91899 5.83303 4.98999 5.59703 5.10399 5.38503C5.21799 5.07703 5.39599 4.81003 5.57299 4.54103C5.72099 4.25003 5.98199 4.05303 6.17399 3.80403C6.37499 3.56203 6.64899 3.40103 6.86599 3.20003C7.07899 2.99003 7.35799 2.88503 7.57999 2.73703C7.81199 2.60403 8.01399 2.45703 8.22999 2.38703L8.76899 2.16503L9.24299 1.96803L8.75799 0.0300293L8.16099 0.174029C7.96999 0.222029 7.73699 0.278029 7.47199 0.345029C7.20099 0.395029 6.91199 0.532029 6.58999 0.657029C6.27199 0.799029 5.90399 0.895029 5.56199 1.12303C5.21799 1.34103 4.82099 1.52303 4.47099 1.81503C4.13199 2.11603 3.72299 2.37703 3.42099 2.76003C3.09099 3.11803 2.76499 3.49403 2.51199 3.92203C2.21899 4.33003 2.01999 4.77803 1.80999 5.22103C1.61999 5.66403 1.46699 6.11703 1.34199 6.55703C1.10499 7.43903 0.998993 8.27703 0.957993 8.99403C0.923993 9.71203 0.943993 10.309 0.985993 10.741C1.00099 10.945 1.02899 11.143 1.04899 11.28L1.07399 11.448L1.09999 11.442C1.27785 12.2729 1.6873 13.0364 2.28096 13.6442C2.87462 14.2521 3.62823 14.6794 4.45463 14.8769C5.28103 15.0743 6.14644 15.0337 6.95075 14.7599C7.75506 14.486 8.4654 13.99 8.9996 13.3293C9.5338 12.6686 9.87004 11.8701 9.96941 11.0263C10.0688 10.1825 9.92723 9.32779 9.56112 8.56105C9.19502 7.79432 8.61933 7.14689 7.90064 6.69368C7.18196 6.24046 6.34965 5.99997 5.49999 6.00003ZM16.5 6.00003C16.277 6.00003 16.063 6.03403 15.85 6.06503C15.919 5.83303 15.99 5.59703 16.104 5.38503C16.218 5.07703 16.396 4.81003 16.573 4.54103C16.721 4.25003 16.982 4.05303 17.174 3.80403C17.375 3.56203 17.649 3.40103 17.866 3.20003C18.079 2.99003 18.358 2.88503 18.58 2.73703C18.812 2.60403 19.014 2.45703 19.23 2.38703L19.769 2.16503L20.243 1.96803L19.758 0.0300293L19.161 0.174029C18.97 0.222029 18.737 0.278029 18.472 0.345029C18.201 0.395029 17.912 0.532029 17.59 0.657029C17.273 0.800029 16.904 0.895029 16.562 1.12403C16.218 1.34203 15.821 1.52403 15.471 1.81603C15.132 2.11703 14.723 2.37803 14.421 2.76003C14.091 3.11803 13.765 3.49403 13.512 3.92203C13.219 4.33003 13.02 4.77803 12.81 5.22103C12.62 5.66403 12.467 6.11703 12.342 6.55703C12.105 7.43903 11.999 8.27703 11.958 8.99403C11.924 9.71203 11.944 10.309 11.986 10.741C12.001 10.945 12.029 11.143 12.049 11.28L12.074 11.448L12.1 11.442C12.2779 12.2729 12.6873 13.0364 13.281 13.6442C13.8746 14.2521 14.6282 14.6794 15.4546 14.8769C16.281 15.0743 17.1464 15.0337 17.9507 14.7599C18.7551 14.486 19.4654 13.99 19.9996 13.3293C20.5338 12.6686 20.87 11.8701 20.9694 11.0263C21.0688 10.1825 20.9272 9.32779 20.5611 8.56105C20.195 7.79432 19.6193 7.14689 18.9006 6.69368C18.182 6.24046 17.3496 5.99997 16.5 6.00003Z"
            fill="#FFB568"
          />
        </svg>
      </div>

      <div className="space-y-4 ">
        <p className="text-text-color dark:text-text-color-dark">{data.body}</p>
        <p className="font-semibold text-lg dark:text-title-color-dark">
          {data.date}
        </p>
      </div>

      <div className="flex space-x-4">
        <div className="w-[60px] h-[60px] overflow-hidden rounded-full">
          <img
            src="assets/KyouKai.jpg"
            alt={data.profileImg}
            className="w-full h-full object-center object-cover"
          />
        </div>

        <div className="">
          <p className="font-semibold text-lg dark:text-title-color-dark">
            {data.name}
          </p>
          <p className="text-text-color dark:text-text-color-dark">
            {data.position}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;