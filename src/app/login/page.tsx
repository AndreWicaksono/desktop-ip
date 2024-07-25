import FormLogin from "@/components/molecules/FormLogin";

export default function PageLogin() {
  return (
    <>
      <main className="relative">
        <div className="bg-[#01449C] absolute inset-0 mix-blend-multiply" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Background Pattern"
          className="bg-no-repeat object-cover h-[1000px] w-full"
          src="/bg-login.png"
          height={1000}
          width="100%"
        />

        <FormLogin className="mt-[138px]" />
      </main>
    </>
  );
}
