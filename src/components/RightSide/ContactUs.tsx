function ContactUs() {
  return (
    <div className="flex flex-col">
      <h1 className=" text-pink-300 text-2xl poppins-semibold">EMAIL US</h1>
      <div className=" flex w-full gap-2 items-center justify-center pt-2">
        <form className="w-full p-2 border-zinc-600 border rounded-md space-y-2 flex flex-col">
          <div className="w-full flex flex-col space-y-1">
            <label
              htmlFor="email"
              className="text-[0.7rem] text-pink-500 poppins-semibold pl-1"
            >
              Email Address
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              className="text-pink-300 py-2 px-3 rounded-md bg-[#2A2627] text-[0.75rem] border border-pink-700"
            />
          </div>
          <div className="w-full flex flex-col space-y-1">
            <label
              htmlFor="message"
              className="text-[0.7rem] text-pink-500 poppins-semibold pl-1"
            >
              Your Message
            </label>

            <textarea
              placeholder="Heyy"
              className="text-pink-300 py-2 px-3 rounded-md bg-[#2A2627] text-[0.75rem] border border-pink-700 h-[300px] resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#2A2627] text-pink-300 w-1/4 py-2 text-[0.8rem] mx-auto rounded-md border border-pink-70"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
