function ContactUs() {
  return (
    <div className="flex flex-col">
      <h1 className=" text-[#037B0B] text-2xl poppins-semibold">Contact Us</h1>
      <div className=" flex w-full gap-2 items-center justify-center pt-2">
        <form className="w-full p-2 border-zinc-600 border rounded-md space-y-2 flex flex-col">
          <div className="w-full flex flex-col space-y-1">
            <label
              htmlFor="email"
              className="text-[0.7rem] text-[#E73635] poppins-semibold pl-1"
            >
              Email Address
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              className="text-blue-500 py-2 px-3 rounded-md bg-white/15 backdrop-blur-lg text-[0.75rem] border border-slate-700"
            />
          </div>
          <div className="w-full flex flex-col space-y-1">
            <label
              htmlFor="message"
              className="text-[0.7rem] text-[#2266CF] poppins-semibold pl-1"
            >
              Your Message
            </label>

            <textarea
              placeholder="Heyy"
              className="text-blue-500 py-2 px-3 rounded-md bg-white/15 backdrop-blur-lg text-[0.75rem] border border-slate-700 resize-none h-[300px]"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-white/15 backdrop-blur-3xl text-blue-500 w-1/2 py-2 text-[0.8rem] mx-auto rounded-md border-[1px] border-slate-900"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
