import "./Banner.module.scss";

export default function Banner() {
  return (
    <div className="h-screen flex flex-col justify-center items-start">
      <h1 className="text-[--green] mb-7">Hi my name is</h1>
      <h2 className="text-[--lightest-slate] font-semibold text-4xl lg:text-7xl mb-2">
        Dat Nguyen
      </h2>
      <h2 className="text-[--slate] font-semibold text-4xl lg:text-7xl mb-6	">
        I&apos;m a front-end developer.
      </h2>
      <p className="text-[--slate]">
        I&apos;m a front-end developer based in Ho Chi Minh City, Vietnam. I
        have a passion for building things by code.
      </p>
    </div>
  );
}
