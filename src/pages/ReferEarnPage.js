import { useCallback } from "react";

const ReferEarnPage = () => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://home.accredian.com/");
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open("https://home.accredian.com/login");
  }, []);

  const onLinkContainerClick2 = useCallback(() => {
    window.open("https://trial.accredian.com/");
  }, []);

  const onLinkContainerClick3 = useCallback(() => {
    window.open("https://home.accredian.com/whyaccredian");
  }, []);

  const onLinkContainerClick4 = useCallback(() => {
    window.open("https://www.facebook.com/insaidlearn");
  }, []);

  const onLinkContainerClick5 = useCallback(() => {
    window.open("https://www.linkedin.com/school/insaid/");
  }, []);

  const onLinkContainerClick6 = useCallback(() => {
    window.open("https://twitter.com/insaidlearn");
  }, []);

  const onLinkContainerClick7 = useCallback(() => {
    window.open("https://www.instagram.com/insaid.learn/");
  }, []);

  const onLinkContainerClick8 = useCallback(() => {
    window.open("https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA");
  }, []);

  const onLinkContainerClick9 = useCallback(() => {
    window.open("https://home.accredian.com/About");
  }, []);

  const onLinkContainerClick10 = useCallback(() => {
    window.open("https://home.accredian.com/Career");
  }, []);

  const onLinkContainerClick11 = useCallback(() => {
    window.open("https://blog.accredian.com/");
  }, []);

  const onLinkContainerClick12 = useCallback(() => {
    window.open("https://home.accredian.com/policies/accredian-policy");
  }, []);

  const onLinkContainerClick13 = useCallback(() => {
    window.open("https://home.accredian.com/terms/referral");
  }, []);

  const onLinkContainerClick14 = useCallback(() => {
    window.open("https://home.accredian.com/terms/privacy");
  }, []);

  const onLinkContainerClick15 = useCallback(() => {
    window.open("https://home.accredian.com/terms");
  }, []);

  const onLinkContainerClick16 = useCallback(() => {
    window.open("https://home.accredian.com/Faq");
  }, []);

  const onBenefitsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFAQsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSupportTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='ctaCircled94f7e66bfe364d78b6']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="w-full relative bg-homeaccrediancom-nero h-[4541px] overflow-hidden text-center text-xl text-darkslategray-200 font-source-sans-pro">
      <div className="absolute top-[60px] left-[6px] w-[1914px] h-[79px] flex flex-row items-start justify-center py-[9.6px] px-[280px] box-border text-[14.9px] text-homeaccrediancom-nero font-inter">
        <div className="self-stretch flex-1 flex flex-row items-center justify-between py-2.5 px-0 box-border max-w-[1360px] min-h-[60px]">
          <div className="w-[560px] flex flex-row items-center justify-start gap-[32px]">
            <div
              className="flex flex-col items-start justify-start cursor-pointer"
              onClick={onLinkContainerClick}
            >
              <img
                className="w-[125px] relative h-[36.7px] overflow-hidden shrink-0 object-cover max-w-[125px]"
                alt=""
                src="/logopng@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="rounded-md bg-homeaccrediancom-royal-blue flex flex-row items-center justify-start py-2 px-[18px] gap-[4px]">
                <div className="relative leading-[24px] font-medium">
                  Courses
                </div>
                <img className="w-4 relative h-4" alt="" src="/svg.svg" />
              </div>
            </div>
          </div>
          <div className="w-[800px] flex flex-row items-center justify-end gap-[32px] text-left text-mini-8 text-homeaccrediancom-mirage">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[24px] capitalize font-medium">{`Refer & Earn`}</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[32px]">
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[24px] capitalize font-medium">
                  Resources
                </div>
              </div>
              <div className="flex flex-col items-start justify-start text-[15px]">
                <div className="relative leading-[24px] capitalize font-medium">
                  About us
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[16px] text-center text-[15.3px]">
              <div
                className="flex flex-col items-start justify-start cursor-pointer"
                onClick={onLinkContainerClick1}
              >
                <div className="rounded-md bg-homeaccrediancom-gull-gray-20 flex flex-row items-start justify-start py-2 px-[18px]">
                  <a
                    className="relative leading-[24px] font-medium text-[inherit] [text-decoration:none]"
                    href="https://home.accredian.com/login"
                    target="_blank"
                  >
                    Login
                  </a>
                </div>
              </div>
              <div
                className="flex flex-col items-start justify-start cursor-pointer text-mini-8 text-homeaccrediancom-nero"
                onClick={onLinkContainerClick2}
              >
                <div className="rounded-md bg-homeaccrediancom-royal-blue flex flex-row items-start justify-start py-2 px-[18px]">
                  <a
                    className="relative leading-[24px] font-medium text-[inherit] [text-decoration:none]"
                    href="https://trial.accredian.com/"
                    target="_blank"
                  >
                    Try for free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_6px)] top-[0px] right-[0px] left-[6px] bg-homeaccrediancom-nero h-[60px] flex flex-col items-start justify-start text-left text-base-9 text-homeaccrediancom-mine-shaft1 font-inter">
        <div className="self-stretch bg-homeaccrediancom-royal-blue-15 flex flex-row items-center justify-center py-4 px-[648px]">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="relative leading-[28px] font-medium">
              Navigate your ideal career path with tailored expert advice
            </div>
            <div className="flex flex-col items-start justify-start py-0 px-2 text-center text-mid text-homeaccrediancom-royal-blue">
              <div className="flex flex-col items-center justify-start">
                <div className="relative leading-[28px] capitalize font-medium">
                  contact expert
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[269px] left-[285px] shadow-[0px_4px_65px_1px_rgba(0,_7,_43,_0.21)] rounded-[29px] bg-aliceblue-100 w-[1356px] h-[692px]" />
      <div
        className="absolute top-[1036px] left-[0px] bg-aliceblue-100 w-[1928px] h-[785px]"
        data-scroll-to="rectangle"
      />
      <div className="absolute top-[396px] left-[330px] w-[473px] h-[367px] text-left text-[88px] text-homeaccrediancom-mirage font-homeaccrediancom-roboto-bold-17">
        <b className="absolute top-[0px] left-[0px] leading-[88px] flex items-center w-[438.1px] h-[190px]">{`Let’s Learn & Earn`}</b>
        <div className="absolute top-[227px] left-[0px] w-[473px] h-[140px] text-21xl">
          <div className="absolute top-[0px] left-[0px] flex items-center w-[473px] h-[140px]">
            <span className="w-full">
              <p className="m-0 leading-[43px] whitespace-pre-wrap">{`Get             Voucher `}</p>
              <p className="m-0 leading-[43px]">{`Worth Up To `}</p>
              <p className="m-0 whitespace-pre-wrap text-[54px] text-homeaccrediancom-royal-blue">
                <b className="leading-[61px]">Rs. 15,000</b>
              </p>
            </span>
          </div>
          <img
            className="absolute top-[3px] left-[71.5px] w-[78.5px] h-[27px] object-cover"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
      </div>
      <img
        className="absolute top-[269px] left-[990px] w-[157px] h-[157px] object-contain"
        alt=""
        src="/anniversary-8-2@2x.png"
      />
      <img
        className="absolute top-[693px] left-[1470px] w-[157px] h-[157px] object-cover"
        alt=""
        src="/anniversary-8-3@2x.png"
      />
      <img
        className="absolute top-[356px] left-[285px] w-[157px] h-[87px] object-cover"
        alt=""
        src="/anniversary-8-4@2x.png"
      />
      <img
        className="absolute top-[269px] left-[1458px] w-[157px] h-[87px] object-contain"
        alt=""
        src="/anniversary-8-5@2x.png"
      />
      <img
        className="absolute top-[269px] left-[864px] w-[739px] h-[725px] object-cover"
        alt=""
        src="/anniversary-7-1@2x.png"
      />
      <div className="absolute top-[2037px] left-[661px] rounded-t-sm rounded-b-none bg-royalblue-100 w-[921px] h-[58px]" />
      <img
        className="absolute top-[758px] left-[836px] w-[157px] h-[157px] object-contain"
        alt=""
        src="/anniversary-8-1@2x.png"
      />
      <img
        className="absolute top-[1160px] left-[274px] w-[1383px] h-[491px] object-cover"
        alt=""
        src="/18512590ai-1-1@2x.png"
      />
      <div className="absolute top-[1061px] left-[calc(50%_-_157px)] text-8xl-7 leading-[43px] font-semibold font-homeaccrediancom-roboto-bold-17 flex items-center w-80 h-[59px] text-homeaccrediancom-mirage">
        <span className="w-full">
          <span>{`How Do I `}</span>
          <span className="text-homeaccrediancom-royal-blue">Refer?</span>
        </span>
      </div>
      <div className="absolute top-[1912px] left-[calc(50%_-_288px)] text-8xl-7 leading-[43px] font-semibold font-homeaccrediancom-roboto-bold-17 flex items-center w-[584px] h-[59px] text-homeaccrediancom-mirage">
        <span className="w-full">
          <span>{`What Are The `}</span>
          <span className="text-homeaccrediancom-royal-blue">
            Referral Benefits?
          </span>
        </span>
      </div>
      <img
        className="absolute h-[1.48%] w-[4.58%] top-[28.72%] right-[68.02%] bottom-[69.81%] left-[27.4%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/layer-2-00000166652077678251612620000003541000192939887504.svg"
      />
      <img
        className="absolute h-[1.48%] w-[3.39%] top-[28.72%] right-[48.33%] bottom-[69.8%] left-[48.28%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/layer-10.svg"
      />
      <img
        className="absolute h-[1.48%] w-[3.39%] top-[28.72%] right-[28.44%] bottom-[69.8%] left-[68.18%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-22036.svg"
      />
      <div className="absolute top-[1397px] left-[460px] text-base leading-[22px] font-homeaccrediancom-roboto-bold-17 text-black flex items-center justify-center w-[193px] h-[88px]">
        Submit referrals easily via our website’s referral section.
      </div>
      <div className="absolute top-[1403px] left-[860px] text-base leading-[22px] font-homeaccrediancom-roboto-bold-17 text-black flex items-center justify-center w-[193px] h-[88px]">
        Earn rewards once your referral joins an Accredian program.
      </div>
      <div className="absolute top-[1403px] left-[1249px] text-base leading-[22px] font-homeaccrediancom-roboto-bold-17 text-black flex items-center justify-center w-[193px] h-[88px]">
        Both parties receive a bonus 30 days after program enrollment.
      </div>
      <div className="absolute w-full top-[3745px] right-[0px] left-[0px] bg-homeaccrediancom-mine-shaft flex flex-col items-center justify-start py-8 px-[360px] box-border text-sm text-homeaccrediancom-nero font-homeaccrediancom-roboto-bold-17">
        <div className="w-[1200px] relative h-[731.9px] max-w-[1200px]">
          <div className="absolute w-[calc(100%_-_48px)] top-[0px] right-[24px] left-[24px] h-[59px] flex flex-row flex-wrap items-start justify-center max-w-[1200px]">
            <div className="self-stretch w-[768px] flex flex-col items-start justify-start max-w-[768px]">
              <img
                className="w-36 relative h-[38.3px] overflow-hidden shrink-0 object-cover max-w-[768px]"
                alt=""
                src="/accredainnewwebp@2x.png"
              />
            </div>
            <div className="self-stretch w-96 flex flex-col items-center justify-start py-0 px-[67px] box-border max-w-[384px]">
              <div className="w-[250px] rounded-lg bg-homeaccrediancom-japanese-laurel box-border flex flex-row items-center justify-center py-[7px] px-[39.5px] min-w-[64px] z-[1] border-[1px] border-solid border-homeaccrediancom-nero">
                <div className="relative tracking-[0.4px] leading-[24.5px] font-medium">
                  Schedule 1-on-1 Call Now
                </div>
              </div>
              <div className="flex flex-col items-start justify-start z-[0] text-left">
                <div className="relative leading-[20px]">
                  Speak with our Learning Advisor
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[calc(100%_-_48px)] top-[90.5px] right-[24px] left-[24px] box-border h-px border-t-[1px] border-solid border-homeaccrediancom-mystic" />
          <div className="absolute w-[calc(100%_-_48px)] top-[91.5px] right-[24px] left-[24px] h-[539.4px] flex flex-row flex-wrap items-start justify-center max-w-[1200px] text-left text-xl">
            <div className="self-stretch w-[432px] flex flex-col items-start justify-center pt-8 px-0 pb-0 box-border max-w-[432px] text-mid">
              <div className="w-full relative h-[507.4px] max-w-[432px]">
                <div className="absolute w-[calc(100%_-_16px)] top-[0px] right-[0px] left-[16px] flex flex-col items-start justify-start text-xl">
                  <div className="relative tracking-[0.19px] leading-[30px]">
                    Programs
                  </div>
                </div>
                <div className="absolute top-[33.2px] left-[0px] rounded-t rounded-b-none w-[380px] flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 box-border min-h-[48px]">
                    <div className="flex-1 flex flex-col items-start justify-start pt-[11.3px] px-0 pb-3">
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3.2px]">
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <b className="relative tracking-[0.16px] leading-[25.5px]">{`Data Science & AI`}</b>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="w-6 relative h-6"
                        alt=""
                        src="/svg1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute top-[85.9px] left-[0px] w-[380px] flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 box-border min-h-[48px]">
                    <div className="flex-1 flex flex-col items-start justify-start pt-[11.3px] px-0 pb-3">
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3.2px]">
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <b className="relative tracking-[0.16px] leading-[25.5px]">
                            Product Management
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="w-6 relative h-6"
                        alt=""
                        src="/svg1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute top-[138.6px] left-[0px] w-[380px] flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 box-border min-h-[48px]">
                    <div className="flex-1 flex flex-col items-start justify-start pt-[11.3px] px-0 pb-3">
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3.2px]">
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <b className="relative tracking-[0.16px] leading-[25.5px]">
                            Business Analytics
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="w-6 relative h-6"
                        alt=""
                        src="/svg1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute top-[191.3px] left-[0px] w-[380px] flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 box-border min-h-[48px]">
                    <div className="flex-1 flex flex-col items-start justify-start pt-[11.3px] px-0 pb-3">
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3.2px]">
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <b className="relative tracking-[0.16px] leading-[25.5px]">
                            Digital Transformation
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="w-6 relative h-6"
                        alt=""
                        src="/svg1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute top-[243.9px] left-[0px] w-[380px] flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 box-border min-h-[48px]">
                    <div className="flex-1 flex flex-col items-start justify-start pt-[11.3px] px-0 pb-3">
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3.2px]">
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <b className="relative tracking-[0.16px] leading-[25.5px]">
                            Business Management
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="w-6 relative h-6"
                        alt=""
                        src="/svg1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute top-[296.6px] left-[0px] w-[380px] flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 box-border min-h-[48px]">
                    <div className="flex-1 flex flex-col items-start justify-start pt-[11.3px] px-0 pb-3">
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3.2px]">
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <b className="relative tracking-[0.16px] leading-[25.5px]">
                            Project Management
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="w-6 relative h-6"
                        alt=""
                        src="/svg1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute top-[349.3px] left-[0px] w-[380px] flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 box-border min-h-[48px]">
                    <div className="flex-1 flex flex-col items-start justify-start pt-[11.3px] px-0 pb-3">
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3.2px]">
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <b className="relative tracking-[0.16px] leading-[25.5px]">{`Strategy & Leadership`}</b>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="w-6 relative h-6"
                        alt=""
                        src="/svg1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute top-[402px] left-[0px] w-[380px] flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 box-border min-h-[48px]">
                    <div className="flex-1 flex flex-col items-start justify-start pt-[11.3px] px-0 pb-3">
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3.2px]">
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <b className="relative tracking-[0.16px] leading-[25.5px]">
                            Senior Management
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="w-6 relative h-6"
                        alt=""
                        src="/svg1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute top-[454.7px] left-[0px] rounded-t-none rounded-b w-[380px] flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 box-border min-h-[48px]">
                    <div className="flex-1 flex flex-col items-start justify-start pt-[11.3px] px-0 pb-3">
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3.2px]">
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <b className="relative tracking-[0.16px] leading-[25.5px]">
                            Fintech
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="w-6 relative h-6"
                        alt=""
                        src="/svg1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch w-[528px] flex flex-col items-start justify-center pt-8 px-0 pb-0 box-border max-w-[528px]">
              <div className="w-full h-[507.4px] flex flex-col items-start justify-start max-w-[528px]">
                <div className="self-stretch relative h-[306.1px]">
                  <div className="absolute w-full top-[8px] right-[0px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.19px] leading-[30px]">
                      Contact Us
                    </div>
                  </div>
                  <div className="absolute w-full top-[42px] right-[0px] left-[0px] flex flex-col items-start justify-start gap-[4px] text-sm">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <a
                          className="self-stretch relative tracking-[0.13px] leading-[21px] text-[inherit] [text-decoration:none]"
                          href="mailto:admissions@accredian.com"
                          target="_blank"
                        >
                          Email us (For Data Science Queries):
                          admissions@accredian.com
                        </a>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <a
                          className="self-stretch relative tracking-[0.13px] leading-[21px] text-[inherit] [text-decoration:none]"
                          href="mailto:pm@accredian.com"
                          target="_blank"
                        >
                          Email us (For Product Management
                          Queries):pm@accredian.com
                        </a>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch relative tracking-[0.13px] leading-[21px]">
                          Data Science Admission Helpline:+91 9079653292 (9 AM -
                          7 PM)
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch relative tracking-[0.13px] leading-[21px]">
                          Product Management Admission Helpline:+91 9625811095
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch relative tracking-[0.13px] leading-[21px]">
                          Enrolled Student Helpline: +91 7969322507
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch relative tracking-[0.13px] leading-[21px]">
                          <p className="m-0">
                            Office Address: 4th Floor, 250, Phase IV, Udyog
                            Vihar, Sector 18, Gurugram,
                          </p>
                          <p className="m-0">Haryana 122015</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-full top-[213px] right-[0px] left-[0px] flex flex-col items-start justify-start text-lg">
                    <div
                      className="self-stretch flex flex-col items-start justify-start cursor-pointer"
                      onClick={onLinkContainerClick3}
                    >
                      <a
                        className="self-stretch relative tracking-[0.17px] leading-[27px] text-[inherit] [text-decoration:none]"
                        href="https://home.accredian.com/whyaccredian"
                        target="_blank"
                      >
                        Why Accredian
                      </a>
                    </div>
                  </div>
                  <div className="absolute w-full top-[244px] right-[0px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.19px] leading-[30px] font-light">
                      Follow Us
                    </div>
                  </div>
                  <div
                    className="absolute top-[278.9px] left-[0px] flex flex-row items-center justify-start cursor-pointer"
                    onClick={onLinkContainerClick4}
                  >
                    <img
                      className="w-[27.2px] relative h-[27.2px]"
                      alt=""
                      src="/svg2.svg"
                    />
                  </div>
                  <div
                    className="absolute top-[278.9px] left-[27.2px] flex flex-row items-center justify-start py-0 pr-0 pl-4 cursor-pointer"
                    onClick={onLinkContainerClick5}
                  >
                    <img
                      className="w-[27.2px] relative h-[27.2px]"
                      alt=""
                      src="/svg3.svg"
                    />
                  </div>
                  <div
                    className="absolute top-[278.9px] left-[70.4px] flex flex-row items-start justify-start py-0 pr-0 pl-[21.6px] cursor-pointer"
                    onClick={onLinkContainerClick6}
                  >
                    <div className="w-[27.2px] h-[27.2px] overflow-hidden shrink-0 flex flex-row items-center justify-start">
                      <img
                        className="flex-1 relative max-w-full overflow-hidden h-[27.2px]"
                        alt=""
                        src="/frame.svg"
                      />
                    </div>
                  </div>
                  <div
                    className="absolute top-[278.9px] left-[119.1px] flex flex-row items-center justify-start py-0 pr-0 pl-4 cursor-pointer"
                    onClick={onLinkContainerClick7}
                  >
                    <img
                      className="w-[27.2px] relative h-[27.2px]"
                      alt=""
                      src="/svg4.svg"
                    />
                  </div>
                  <div
                    className="absolute top-[278.9px] left-[162.3px] flex flex-row items-center justify-start py-0 pr-0 pl-4 cursor-pointer"
                    onClick={onLinkContainerClick8}
                  >
                    <img
                      className="w-[27.2px] relative h-[27.2px]"
                      alt=""
                      src="/svg5.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch w-48 flex flex-col items-start justify-center pt-8 px-0 pb-0 box-border max-w-[192px]">
              <div className="w-full h-[507.4px] flex flex-col items-start justify-start max-w-[192px]">
                <div className="self-stretch flex flex-col items-start justify-start pt-2 px-0 pb-0 gap-[4px]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative tracking-[0.19px] leading-[30px]">
                      Accredian
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div
                        className="self-stretch flex flex-col items-start justify-start cursor-pointer"
                        onClick={onLinkContainerClick9}
                      >
                        <a
                          className="self-stretch relative tracking-[0.13px] leading-[21px] text-[inherit] [text-decoration:none]"
                          href="https://home.accredian.com/About"
                          target="_blank"
                        >
                          About
                        </a>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div
                        className="self-stretch flex flex-col items-start justify-start cursor-pointer"
                        onClick={onLinkContainerClick10}
                      >
                        <a
                          className="self-stretch relative tracking-[0.13px] leading-[21px] text-[inherit] [text-decoration:none]"
                          href="https://home.accredian.com/Career"
                          target="_blank"
                        >
                          Career
                        </a>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div
                        className="self-stretch flex flex-col items-start justify-start cursor-pointer"
                        onClick={onLinkContainerClick11}
                      >
                        <a
                          className="self-stretch relative tracking-[0.13px] leading-[21px] text-[inherit] [text-decoration:none]"
                          href="https://blog.accredian.com/"
                          target="_blank"
                        >
                          Blog
                        </a>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div
                        className="self-stretch flex flex-col items-start justify-start cursor-pointer"
                        onClick={onLinkContainerClick12}
                      >
                        <a
                          className="self-stretch relative tracking-[0.13px] leading-[21px] text-[inherit] [text-decoration:none]"
                          href="https://home.accredian.com/policies/accredian-policy"
                          target="_blank"
                        >
                          Admission Policy
                        </a>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div
                        className="self-stretch flex flex-col items-start justify-start cursor-pointer"
                        onClick={onLinkContainerClick13}
                      >
                        <a
                          className="self-stretch relative tracking-[0.13px] leading-[21px] text-[inherit] [text-decoration:none]"
                          href="https://home.accredian.com/terms/referral"
                          target="_blank"
                        >
                          Referral Policy
                        </a>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div
                        className="self-stretch flex flex-col items-start justify-start cursor-pointer"
                        onClick={onLinkContainerClick14}
                      >
                        <a
                          className="self-stretch relative tracking-[0.13px] leading-[21px] text-[inherit] [text-decoration:none]"
                          href="https://home.accredian.com/terms/privacy"
                          target="_blank"
                        >
                          Privacy Policy
                        </a>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div
                        className="self-stretch flex flex-col items-start justify-start cursor-pointer"
                        onClick={onLinkContainerClick15}
                      >
                        <a
                          className="self-stretch relative tracking-[0.13px] leading-[21px] text-[inherit] [text-decoration:none]"
                          href="https://home.accredian.com/terms"
                          target="_blank"
                        >
                          Terms Of Service
                        </a>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div
                        className="self-stretch flex flex-col items-start justify-start cursor-pointer"
                        onClick={onLinkContainerClick16}
                      >
                        <a
                          className="self-stretch relative tracking-[0.13px] leading-[21px] text-[inherit] [text-decoration:none]"
                          href="https://home.accredian.com/Faq"
                          target="_blank"
                        >
                          Master FAQs
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[calc(100%_-_48px)] top-[630.9px] right-[24px] left-[24px] flex flex-col items-center justify-start py-10 px-[327.9px] box-border">
            <div className="relative tracking-[0.13px] leading-[21px]">
              © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All
              Rights Reserved
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[76.1px] left-[1823px] h-[216px] flex flex-col items-center justify-center pt-[138px] px-[18px] pb-[18px] box-border">
        <div className="flex flex-row items-start justify-start">
          <img className="w-[60px] relative h-[60px]" alt="" src="/svg6.svg" />
        </div>
      </div>
      <b className="absolute top-[2051px] left-[688px] leading-[24px] flex text-darkslateblue text-left items-center w-[227.4px] h-6">
        Programs
      </b>
      <b className="absolute top-[2039.5px] left-[calc(50%_+_252px)] leading-[24px] flex text-darkslateblue items-center justify-center w-[153.3px] h-12">
        Referrer Bonus
      </b>
      <div className="absolute top-[2094px] left-[661px] shadow-[0px_4px_29.3px_rgba(60,_60,_60,_0.15)] rounded-t-none rounded-b-sm bg-aliceblue-200 w-[921px] h-[503px]" />
      <b className="absolute top-[2040.5px] left-[calc(50%_+_442px)] leading-[24px] flex text-darkslateblue items-center justify-center w-[153.3px] h-12">
        Referee Bonus
      </b>
      <div className="absolute top-[calc(50%_-_132.5px)] left-[1254px] leading-[24px] flex items-center justify-center w-[59.1px] h-6">
        ₹ 7,000
      </div>
      <div className="absolute top-[calc(50%_-_133.5px)] left-[1444px] leading-[24px] flex items-center justify-center w-[59.1px] h-6">
        ₹ 9,000
      </div>
      <div className="absolute top-[calc(50%_-_65.5px)] left-[1254px] leading-[24px] flex items-center justify-center w-[59.1px] h-6">
        ₹ 9,000
      </div>
      <div className="absolute top-[calc(50%_-_66.5px)] left-[1444px] leading-[24px] flex items-center justify-center w-[68.9px] h-6">
        ₹ 11,000
      </div>
      <div className="absolute top-[calc(50%_+_1.5px)] left-[1254px] leading-[24px] flex items-center justify-center w-[68.9px] h-6">
        ₹ 10,000
      </div>
      <div className="absolute top-[calc(50%_+_135.5px)] left-[1254px] leading-[24px] flex items-center justify-center w-[68.9px] h-6">
        ₹ 10,000
      </div>
      <div className="absolute top-[calc(50%_+_0.5px)] left-[1444px] leading-[24px] flex items-center justify-center w-[68.9px] h-6">
        ₹ 10,000
      </div>
      <div className="absolute top-[calc(50%_+_134.5px)] left-[1444px] leading-[24px] flex items-center justify-center w-[68.9px] h-6">
        ₹ 10,000
      </div>
      <div className="absolute top-[calc(50%_+_68.5px)] left-[1254px] leading-[24px] flex items-center justify-center w-[68.9px] h-6">
        ₹ 10,000
      </div>
      <div className="absolute top-[calc(50%_+_202.5px)] left-[1254px] leading-[24px] flex items-center justify-center w-[68.9px] h-6">
        ₹ 10,000
      </div>
      <div className="absolute top-[calc(50%_+_269.5px)] left-[1254px] leading-[24px] flex items-center justify-center w-[68.9px] h-6">
        ₹ 10,000
      </div>
      <div className="absolute top-[calc(50%_+_67.5px)] left-[1444px] leading-[24px] flex items-center justify-center w-[68.9px] h-6">
        ₹ 10,000
      </div>
      <div className="absolute top-[calc(50%_+_201.5px)] left-[1444px] leading-[24px] flex items-center justify-center w-[68.9px] h-6">
        ₹ 10,000
      </div>
      <div className="absolute top-[calc(50%_+_268.5px)] left-[1444px] leading-[24px] flex items-center justify-center w-[68.9px] h-6">
        ₹ 10,000
      </div>
      <div className="absolute top-[2698px] left-[calc(50%_-_118px)] rounded-lg bg-homeaccrediancom-royal-blue w-[236px] h-16 text-homeaccrediancom-nero">
        <div className="absolute top-[20px] left-[69px] leading-[24px] flex items-center justify-center w-[99px] h-6">
          Refer Now
        </div>
      </div>
      <div className="absolute top-[1729px] left-[842px] rounded-lg bg-homeaccrediancom-royal-blue w-[236px] h-16 text-homeaccrediancom-nero">
        <div className="absolute top-[20px] left-[72px] leading-[24px] flex items-center justify-center w-[92px] h-6">
          Refer Now
        </div>
      </div>
      <div className="absolute top-[824px] left-[330px] rounded-lg bg-homeaccrediancom-royal-blue w-[191px] h-[54px] text-homeaccrediancom-nero">
        <div className="absolute top-[15px] left-[52px] leading-[24px] flex items-center justify-center w-[88px] h-6">
          Refer Now
        </div>
      </div>
      <div className="absolute top-[2036px] left-[1186px] box-border w-0.5 h-[553px] border-r-[2px] border-solid border-gray-100" />
      <div className="absolute top-[2036px] left-[1388px] box-border w-0.5 h-[554px] border-r-[2px] border-solid border-gray-100" />
      <div className="absolute h-[calc(100%_-_4331px)] top-[3415px] bottom-[916px] left-[calc(50%_-_680px)] rounded-xl bg-homeaccrediancom-royal-blue box-border w-[1360px] text-left text-[28px] text-homeaccrediancom-nero font-inter border-[1px] border-solid border-homeaccrediancom-royal-blue">
        <img
          className="absolute top-[0px] left-[0px] w-[1360px] h-[210px] overflow-hidden"
          alt=""
          src="/ctacircled94f7e66bfe364d78b6esvg-fill.svg"
          data-scroll-to="ctaCircled94f7e66bfe364d78b6"
        />
        <div className="absolute top-[calc(50%_-_40px)] left-[49px] w-[661.2px] h-20">
          <img
            className="absolute top-[0px] left-[0px] rounded-xl w-20 h-20"
            alt=""
            src="/divw20.svg"
          />
          <div className="absolute h-full top-[0px] bottom-[0px] left-[112px] w-[549.2px]">
            <div className="absolute top-[0px] left-[0px] leading-[36px] font-semibold flex items-center w-[537.9px] h-9">
              Want to delve deeper into the program?
            </div>
            <div className="absolute top-[44px] left-[0px] text-base-7 leading-[28px] font-medium text-whitesmoke flex items-center w-[549.4px] h-7">
              Share your details to receive expert insights from our program
              team!
            </div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_1160px)] top-[calc(50%_-_18px)] right-[49px] left-[1111px] rounded-lg bg-homeaccrediancom-nero h-[52px] text-center text-[18.8px] text-dodgerblue">
          <div className="absolute top-[12px] left-[calc(50%_-_67.3px)] leading-[28px] font-semibold flex items-center justify-center w-[110.8px] h-7">
            Get in touch
          </div>
          <img
            className="absolute top-[calc(50%_-_10px)] left-[calc(50%_+_47.3px)] w-5 h-5 overflow-hidden"
            alt=""
            src="/svg7.svg"
          />
        </div>
      </div>
      <div className="absolute top-[2125px] left-[688px] w-[387px] h-12 text-left">
        <div className="absolute top-[0px] left-[37px] leading-[24px] flex items-center w-[350px] h-12">
          Professional Certificate Program in Product Management
        </div>
        <img
          className="absolute h-[37.5%] w-[6.2%] top-[8.33%] right-[93.8%] bottom-[54.17%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group.svg"
        />
      </div>
      <div className="absolute top-[2193px] left-[688px] w-[356px] h-12 text-left">
        <div className="absolute top-[0px] left-[37px] leading-[24px] flex items-center w-[319px] h-12">
          PG Certificate Program in Strategic Product Management
        </div>
        <img
          className="absolute h-[37.5%] w-[6.74%] top-[12.5%] right-[93.26%] bottom-[50%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group.svg"
        />
      </div>
      <div className="absolute top-[2261px] left-[688px] w-[356px] h-12 text-left">
        <div className="absolute top-[0px] left-[37px] leading-[24px] flex items-center w-[319px] h-12">
          Executive Program in Data Driven Product Management
        </div>
        <img
          className="absolute h-[37.5%] w-[6.74%] top-[10.42%] right-[93.26%] bottom-[52.08%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group.svg"
        />
      </div>
      <div className="absolute top-[2329px] left-[688px] w-[401px] h-12 text-left">
        <div className="absolute top-[0px] left-[37px] leading-[24px] flex items-center w-[364px] h-12">
          Executive Program in Product Management and Digital Transformation
        </div>
        <img
          className="absolute h-[37.5%] w-[5.99%] top-[12.5%] right-[94.01%] bottom-[50%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group.svg"
        />
      </div>
      <div className="absolute top-[2397px] left-[688px] w-[376px] h-12 text-left">
        <div className="absolute top-[0px] left-[37px] leading-[24px] flex items-center w-[339px] h-12">
          Executive Program in Product Management
        </div>
        <img
          className="absolute h-[37.5%] w-[6.38%] top-[12.5%] right-[93.62%] bottom-[50%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group.svg"
        />
      </div>
      <div className="absolute top-[2465px] left-[688px] w-[401px] h-12 text-left">
        <div className="absolute top-[0px] left-[37px] leading-[24px] flex items-center w-[364px] h-12">
          Advanced Certification in Product Management
        </div>
        <img
          className="absolute h-[37.5%] w-[5.99%] top-[12.5%] right-[94.01%] bottom-[50%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group.svg"
        />
      </div>
      <div className="absolute top-[2533px] left-[688px] w-[401px] h-12 text-left">
        <div className="absolute top-[0px] left-[37px] leading-[24px] flex items-center w-[364px] h-12">
          Executive Program in Product Management and Project Management
        </div>
        <img
          className="absolute h-[37.5%] w-[5.99%] top-[12.5%] right-[94.01%] bottom-[50%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group.svg"
        />
      </div>
      <div className="absolute top-[2037px] left-[351px] w-[270px] h-[572px] text-left text-lg">
        <div className="absolute top-[50px] left-[0px] shadow-[0px_1px_24.4px_1px_rgba(0,_0,_0,_0.16)] rounded-t-none rounded-b-sm bg-homeaccrediancom-nero w-[270px] h-[522px]" />
        <div className="absolute top-[0px] left-[0px] shadow-[0px_1px_24.4px_1px_rgba(0,_0,_0,_0.16)] rounded-t-lg rounded-b-none bg-homeaccrediancom-royal-blue w-[270px] h-[50px]" />
        <div className="absolute top-[13px] left-[16px] leading-[27px] uppercase font-semibold text-homeaccrediancom-nero flex items-center w-[120.5px] h-[27px]">
          ALL PROGRAMS
        </div>
        <img
          className="absolute top-[calc(50%_-_267px)] right-[11px] w-4 h-4"
          alt=""
          src="/svg8.svg"
        />
        <div className="absolute top-[calc(50%_-_37px)] left-[16px] w-[237.6px] h-[54px]">
          <div className="absolute top-[calc(50%_-_27px)] left-[0px] w-[226.4px] h-[54px]">
            <div className="absolute top-[0px] left-[0px] leading-[27px] uppercase font-semibold flex items-center w-[200.9px] h-[54px]">
              Fintech
            </div>
          </div>
          <img
            className="absolute top-[calc(50%_-_8px)] right-[-0.1px] w-[11.3px] h-4"
            alt=""
            src="/svg9.svg"
          />
        </div>
        <div className="absolute top-[448px] left-[16px] w-[234.5px] h-[54px]">
          <div className="absolute top-[0px] left-[0px] leading-[27px] uppercase font-semibold flex items-center w-[213px] h-[54px]">
            Digital Transformation
          </div>
          <img
            className="absolute h-[16.85%] w-[2.09%] top-[40.74%] right-[0.04%] bottom-[42.41%] left-[97.87%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector.svg"
          />
        </div>
        <div className="absolute top-[311px] left-[17px] w-[236.6px] h-[54px]">
          <div className="absolute top-[0px] left-[0px] leading-[27px] uppercase font-semibold flex items-center w-[200.9px] h-[54px]">
            Senior Management
          </div>
          <img
            className="absolute top-[calc(50%_-_8px)] right-[-0.1px] w-[11.3px] h-4"
            alt=""
            src="/svg9.svg"
          />
        </div>
        <div className="absolute top-[510px] left-[16px] w-[237.6px] h-[54px]">
          <div className="absolute top-[0px] left-[0px] w-[237.6px] h-[54px]">
            <div className="absolute top-[0px] left-[0px] leading-[27px] uppercase font-semibold flex items-center w-[200.9px] h-[54px]">
              Business Analytics
            </div>
            <img
              className="absolute top-[calc(50%_-_8px)] right-[-0.1px] w-[11.3px] h-4"
              alt=""
              src="/svg9.svg"
            />
          </div>
        </div>
        <div className="absolute top-[378px] left-[16px] w-[237.6px] h-[54px]">
          <div className="absolute top-[0px] left-[0px] leading-[27px] uppercase font-semibold flex items-center w-[200.9px] h-[54px]">
            Data Science
          </div>
          <img
            className="absolute top-[calc(50%_-_8px)] right-[-0.1px] w-[11.3px] h-4"
            alt=""
            src="/svg9.svg"
          />
        </div>
        <div className="absolute top-[calc(50%_-_100px)] left-[16px] w-[238.1px] h-[54px]">
          <div className="absolute top-[calc(50%_-_27px)] left-[0px] w-[226.4px] h-[54px]">
            <div className="absolute top-[0px] left-[0px] leading-[27px] uppercase font-semibold flex items-center w-[200.9px] h-[54px]">
              Business Management
            </div>
          </div>
          <img
            className="absolute top-[calc(50%_-_8px)] right-[0px] w-[11.3px] h-4"
            alt=""
            src="/svg10.svg"
          />
        </div>
        <div className="absolute top-[124px] left-[17px] w-[238.3px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] leading-[27px] uppercase font-semibold flex items-center w-[196px] h-[47px]">{`Strategy & Leadership`}</div>
          <img
            className="absolute top-[calc(50%_-_7.5px)] right-[0px] w-[11.3px] h-4"
            alt=""
            src="/svg11.svg"
          />
        </div>
        <div className="absolute top-[61px] left-[16px] w-[238.3px] h-[43px]">
          <div className="absolute top-[0px] left-[0px] leading-[27px] uppercase font-semibold flex items-center w-[202px] h-[43px]">
            Product Management
          </div>
          <img
            className="absolute top-[calc(50%_-_7.5px)] right-[0px] w-[11.3px] h-4"
            alt=""
            src="/svg11.svg"
          />
        </div>
        <img
          className="absolute top-[117.5px] left-[20px] max-h-full w-[227px]"
          alt=""
          src="/line-401.svg"
        />
        <img
          className="absolute top-[182px] left-[20px] max-h-full w-[227px]"
          alt=""
          src="/line-402.svg"
        />
        <img
          className="absolute top-[247px] left-[20px] max-h-full w-[227px]"
          alt=""
          src="/line-402.svg"
        />
        <img
          className="absolute top-[312px] left-[19px] max-h-full w-[227px]"
          alt=""
          src="/line-402.svg"
        />
        <img
          className="absolute top-[368px] left-[20px] max-h-full w-[227px]"
          alt=""
          src="/line-402.svg"
        />
        <img
          className="absolute top-[442px] left-[19px] max-h-full w-[227px]"
          alt=""
          src="/line-402.svg"
        />
        <img
          className="absolute top-[507px] left-[19px] max-h-full w-[227px]"
          alt=""
          src="/line-402.svg"
        />
      </div>
      <div
        className="absolute top-[2939px] left-[347px] w-[1281px] h-[341px] text-left text-base-7 text-homeaccrediancom-royal-blue font-inter"
        data-scroll-to="groupContainer"
      >
        <div className="absolute top-[98px] left-[0px] shadow-[0px_2px_26.6px_rgba(0,_0,_0,_0.18)] rounded-6xs bg-homeaccrediancom-nero box-border w-[259px] h-[68px] border-[2px] border-solid border-homeaccrediancom-mystic" />
        <div className="absolute top-[0px] left-[calc(50%_-_189.5px)] text-8xl-7 leading-[36px] capitalize font-semibold flex items-center w-[379px] h-9 text-homeaccrediancom-mirage">
          <span className="w-full">
            <span>{`Frequently Asked `}</span>
            <span className="text-homeaccrediancom-royal-blue">Questions</span>
          </span>
        </div>
        <div className="absolute top-[118px] left-[calc(50%_-_606.8px)] text-[16.6px] leading-[28px] capitalize font-semibold text-center flex items-center justify-center w-[190.8px] h-7">
          Eligibility
        </div>
        <div className="absolute top-[205px] left-[calc(50%_-_625.8px)] leading-[28px] capitalize font-semibold text-dimgray text-center flex items-center justify-center w-[228.9px] h-7">
          How to Use?
        </div>
        <div className="absolute top-[292px] left-[calc(50%_-_594.5px)] text-mid leading-[28px] capitalize font-semibold text-dimgray text-center flex items-center justify-center w-[166px] h-7">{`Terms & Conditions`}</div>
        <div className="absolute w-[calc(100%_-_362.6px)] top-[93px] right-[0px] left-[362.6px] h-[68px] text-base-9">
          <div className="absolute top-[20px] left-[8px] leading-[28px] font-semibold flex items-center w-[872.1px] h-7">
            Do I need to have prior Product Management and Project Management
            experience to enroll in the program?
          </div>
          <img
            className="absolute top-[22px] left-[894.4px] w-6 h-6 object-contain"
            alt=""
            src="/svg12.svg"
          />
        </div>
        <div className="absolute w-[calc(100%_-_394.6px)] top-[169px] right-[16px] left-[378.6px] h-12 text-[15.1px] text-gray-200">
          <div className="absolute top-[0px] left-[0px] leading-[24px] flex items-center w-[872.8px] h-12">
            <span className="w-full">
              <p className="m-0">
                No, the program is designed to be inclusive of all levels of
                experience. All topics will be covered from the basics, making
                it
              </p>
              <p className="m-0">
                suitable for individuals from any field of work.
              </p>
            </span>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_510.6px)] top-[233px] right-[148px] left-[362.6px] h-[68px] text-gray-200">
          <div className="absolute top-[20px] left-[8px] leading-[28px] font-semibold flex items-center w-[427.7px] h-7">
            What is the minimum system configuration required?
          </div>
          <img
            className="absolute top-[22px] left-[746.4px] w-6 h-6"
            alt=""
            src="/svg13.svg"
          />
        </div>
        <div className="absolute top-[185px] left-[0px] rounded-6xs box-border w-[259px] h-[68px] border-[2px] border-solid border-dimgray" />
        <div className="absolute top-[273px] left-[0px] rounded-6xs box-border w-[261px] h-[68px] border-[2px] border-solid border-dimgray" />
      </div>
      <div className="absolute top-[179px] left-[565.2px] w-[794.5px] h-[63px] text-6xl text-darkslategray-100 font-homeaccrediancom-roboto-bold-17">
        <div className="absolute top-[0px] left-[0px] rounded-[38px] bg-royalblue-200 w-[794.5px] h-[63px]" />
        <div
          className="absolute top-[14px] left-[238.3px] leading-[22px] flex items-center justify-center w-[131.6px] h-8 cursor-pointer"
          onClick={onBenefitsTextClick}
        >
          Benefits
        </div>
        <div
          className="absolute top-[14px] left-[429.7px] leading-[22px] flex items-center justify-center w-[126.6px] h-7 cursor-pointer"
          onClick={onFAQsTextClick}
        >
          FAQs
        </div>
        <div
          className="absolute top-[14px] left-[616.1px] leading-[22px] flex items-center justify-center w-[126.6px] h-7 cursor-pointer"
          onClick={onSupportTextClick}
        >
          Support
        </div>
        <div className="absolute top-[14px] left-[51.8px] w-[126.6px] h-[41px] text-homeaccrediancom-royal-blue">
          <div className="absolute top-[0px] left-[0px] leading-[22px] flex items-center justify-center w-[126.6px] h-[35px]">
            Refer
          </div>
          <div className="absolute top-[35px] left-[59.8px] rounded-[50%] bg-homeaccrediancom-royal-blue w-1.5 h-1.5" />
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_266.5px)] left-[1457px] w-[125.2px] h-[17px] text-left">
        <div className="absolute top-[calc(50%_-_8.5px)] left-[0px] leading-[24px] flex items-center w-[76px] h-[15px]">
          Enrolled
        </div>
        <div className="absolute top-[0px] left-[91px] w-[34.2px] h-[17px]">
          <div className="absolute top-[2.9px] left-[19.4px] rounded-[50%] bg-homeaccrediancom-royal-blue w-[11.2px] h-[11.2px]" />
          <div className="absolute top-[0px] left-[0px] rounded-[45px] box-border w-[34.2px] h-[17px] border-[1.5px] border-solid border-darkslategray-200" />
        </div>
      </div>
      <div className="absolute top-[calc(50%_+_359.5px)] right-[338.3px] w-[174.7px] h-[41px] text-left text-lg">
        <div className="absolute top-[calc(50%_-_20.5px)] right-[0px] rounded-lg bg-darkslategray-300 box-border w-[174.7px] h-[41px] border-[1px] border-solid border-homeaccrediancom-royal-blue">
          <div className="absolute top-[13px] left-[33px] leading-[15px] font-semibold flex items-center w-[86px] h-[15px]">
            Show More
          </div>
          <img
            className="absolute top-[calc(50%_-_3.5px)] left-[136.9px] w-[15px] h-[9px] overflow-hidden"
            alt=""
            src="/chevronupsvg.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ReferEarnPage;
