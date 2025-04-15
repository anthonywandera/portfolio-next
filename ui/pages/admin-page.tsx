export default function AdminPage() {
  return (
    <section className="bg-black w-screen h-screen flex items-center justify-center">
      <form className="bg-[var(--theme-color-background)] p-4 flex flex-col gap-2 rounded">
        <label htmlFor="pswd">Enter Password</label>
        <input
          id="pswd"
          name="pswd"
          type="password"
          className="border border-[var(--theme-color-text)] rounded px-0.5"
        />
      </form>
    </section>
  );
}
