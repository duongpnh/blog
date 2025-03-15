
import React, { useState } from "react";
import { MailIcon } from "lucide-react";

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
    // Reset form
    setEmail("");
  };

  return (
    <div className="items-center bg-white dark:bg-zinc-900 flex min-w-60 flex-col w-[392px] p-8 rounded-xl max-md:px-5">
      <div className="flex flex-col items-center text-center">
        <div className="text-[#181A2A] dark:text-gray-200 text-xl font-semibold leading-[1.2]">
          Weekly Newsletter
        </div>
        <div className="text-[#696A75] dark:text-gray-400 text-base font-normal mt-2">
          Get blog articles and offers via email
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xs text-base mt-[30px]"
      >
        <div className="w-full text-[#97989F] font-normal">
          <div className="items-center border border-[color:var(--Secondary-200,#DCDDDF)] dark:border-zinc-700 bg-white dark:bg-zinc-800 flex w-full gap-2.5 px-4 py-3 rounded-md border-solid">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="self-stretch flex-1 shrink basis-[0%] my-auto bg-transparent outline-none dark:text-gray-300"
              required
            />
            <MailIcon className="w-5 h-5 text-gray-400 dark:text-gray-500" />
          </div>
        </div>
        <button
          type="submit"
          className="self-stretch bg-[#4B6BFB] w-full gap-3 overflow-hidden text-white font-medium whitespace-nowrap mt-2 px-5 py-3 rounded-md hover:bg-[#3a5bf0] transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
