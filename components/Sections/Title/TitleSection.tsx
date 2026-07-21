import { S3_BASE_URL } from "@/constants";

export function TitleSection() {
  return (
    <section
      id="intro"
      className="relative h-[30vh] min-[576px]:h-[37vh] bg-linear-[-45deg] from-[#4096ee] to-[#f0f8ff] text-neutral shadow-[0_12px_15px_0_rgba(0,0,0,0.24),0_17px_50px_0_rgba(0,0,0,0.19)]"
    >
      <div
        style={{ backgroundImage: `url(${S3_BASE_URL}/logo/logo-blue.png)` }}
        className="h-full bg-left bg-no-repeat bg-cover min-[576px]:bg-auto"
      >
        <div className="flex h-full flex-col items-center justify-center bg-linear-[-45deg] from-[#4096ee]/50 to-[#f0f8ff]/50 px-4 text-center max-[899px]:from-[#4096ee]/80 max-[899px]:to-[#f0f8ff]/80">
          <h1 className="mb-4 font-display text-[2.6rem] leading-[2.1rem] min-[900px]:text-[4rem] min-[900px]:leading-[3.5rem]">
            ARIEL BEHAR
          </h1>

          <h2 className="text-2xl">
            Design &amp; Development
            <br className="min-[900px]:hidden" />
            &nbsp;Done Differently
          </h2>
        </div>
      </div>
    </section>
  );
}
