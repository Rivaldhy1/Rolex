const Newsletter = () => {
  return (
    <section className="my-12 font-main-font" id="new">
      <div className="bg-main-color mx-6 flex flex-col items-center py-7 space-y-8 lg:mx-24 sm:px-6 md:space-y-0 md:flex-row md:justify-around lg:py-[72px] dark:bg-main-color-dark">
        {/* Desc */}
        <div className="space-y-4 text-center p-3 md:text-left">
          <h2 className="font-semibold text-3xl md:text-4xl md:max-w-[250px] md:leading-normal">
            Subscribe Our Newsletter
          </h2>
          <p className="text-text-color md:max-w-[400px]">
            Don&apos;t miss out on your discounts. Subscribe to our email
            newsletter to get the best offers, discounts, coupons, gifts and
            much more.
          </p>
        </div>

        {/* Input + Button */}
        <div className="w-4/5 space-y-3 md:space-y-0 md:w-3/5 md:flex md:max-w-[500px]">
          <input
            type="email"
            placeholder="Enter your email.."
            className="p-4 w-full text-sm md:h-16"
          />
          <input
            type="submit"
            value="Subscribe"
            className="p-4 w-full bg-button-color text-white uppercase md:w-fit md:text-sm md:px-8 md:h-16 dark:bg-button-color-dark"
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
