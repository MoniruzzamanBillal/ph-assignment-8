import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="errorPageContain">
      <div className="errorPageWrapper">
        <section class="bg-white ">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center">
              <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                404
              </h1>
              <p class="mb-4 text-2xl sm:text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">
                Something's missing.
              </p>
              <p class="mb-4 text-lg sm:text-2xl font-semibold text-gray-800 ">
                <i>{error.statusText || error.message}</i>
              </p>
              <Link to="/">
                <h1 class="inline-flex text-gray-200 hover:text-gray-100 bg-gray-800 hover:bg-gray-900  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-4">
                  Back to Homepage
                </h1>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ErrorPage;
