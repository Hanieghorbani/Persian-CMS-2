import React from "react"
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded"
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined"
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined"
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined"
import TwitterIcon from "@mui/icons-material/Twitter"
import GitHubIcon from "@mui/icons-material/GitHub"
import "./Profile.css"
import CardProfile from "../../components/cardProf/CardProfile"

export default function Profile() {
  return (
    // <div className="w-100 d-flex mt-4 profile">
    //   <div className="rightSection d-flex flex-column ">
    //     <div className="bgMain rounded p-4 text-white">
    //       <div className="d-flex justify-content-between align-items-center">
    //         <h5>پروفایل</h5>
    //         <DriveFileRenameOutlineRoundedIcon className="tagIcon editIcon" />
    //       </div>

    //       <div className="w-100 d-flex flex-column justify-content-center align-items-center mt-5">
    //         <img src="/imgs/logo.png" className="logo" />
    //         <h4 className="text-secondary mt-1">حانیه قربانی</h4>
    //       </div>

    //       <div className="profileInfosMain">
    //         <p>
    //           <EmojiFoodBeverageOutlinedIcon />
    //           طراح سایت
    //         </p>
    //         <p>
    //           <CalendarTodayOutlinedIcon />3 خرداد 1382
    //         </p>
    //         <p>
    //           <LocationOnOutlinedIcon />
    //           تهران
    //         </p>
    //         <p>
    //           <EmailOutlinedIcon />
    //           hnie.ghorbani@gmail.com
    //         </p>
    //         <p>
    //           <LocalPhoneOutlinedIcon />
    //           989121234567+
    //         </p>
    //       </div>
    //       <div className="w-50 mx-auto d-flex justify-content-between mb-3">
    //         <button className="btn btn-outline-secondary">
    //           <FacebookOutlinedIcon />
    //         </button>
    //         <button className="btn btn-outline-secondary">
    //           <TwitterIcon />
    //         </button>
    //         <button className="btn btn-outline-secondary">
    //           <GitHubIcon />
    //         </button>
    //       </div>
    //     </div>
    //     <CardProfile title="تحصیلات" />
    //     <CardProfile title="تجربه کار" />
    //   </div>
    //   <div className="leftSection text-white me-4">
    //     <div className="bgMain rounded p-4">
    //       <h5>توانایی ها</h5>
    //       <div className="w-100 rounded-pill mt-5">
    //         <div className="w-75 rounded-pill d-flex justify-content-between px-3">
    //           <p>JavaScript</p>
    //           <p>75%</p>
    //         </div>
    //       </div>
    //       <div className="w-100 rounded-pill mt-4">
    //         <div className="w-50 rounded-pill d-flex justify-content-between px-3">
    //           <p>React</p>
    //           <p>50%</p>
    //         </div>
    //       </div>
    //       <div className="w-100 rounded-pill mt-4">
    //         <div className="w-100 rounded-pill d-flex justify-content-between px-3">
    //           <p>BootStrap</p>
    //           <p>100%</p>
    //         </div>
    //       </div>
    //       <div className="w-100 rounded-pill mt-4">
    //         <div className="w-100 rounded-pill d-flex justify-content-between px-3">
    //           <p>HTML,CSS</p>
    //           <p>100%</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="bgMain rounded p-4 mt-4 ">
    //       <h5 className="mb-5">بیوگرافی</h5>
    //       <p className="text-secondary mb-4">
    //         لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
    //         استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
    //         ستون و سطرآنچنان که لازم است.
    //         <br />
    //         <br />و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
    //         بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
    //         حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
    //         افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
    //         خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان
    //         امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ
    //         به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
    //         جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
    //         گیرد.
    //       </p>
    //       <div className="cards text-secondary d-flex flex-wrap justify-content-between">
    //         <div className="rounded p-3">
    //           <h6>برنامه های کاربردی Sass</h6>
    //           <p>
    //             لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
    //             استفاده از طراحان گرافیک است.
    //           </p>
    //         </div>
    //         <div className="rounded p-3">
    //           <h6>حسابدار Github</h6>
    //           <p>
    //             لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
    //             استفاده از طراحان گرافیک است.
    //           </p>
    //         </div>
    //         <div className="rounded p-3">
    //           <h6>عکاس</h6>
    //           <p>
    //             لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
    //             استفاده از طراحان گرافیک است.
    //           </p>
    //         </div>
    //         <div className="rounded p-3">
    //           <h6>اپلیکیشن موبایل</h6>
    //           <p>
    //             لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
    //             استفاده از طراحان گرافیک است.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-100 mt-4 profile">
      <div className="rightSection">
        <div className="bgMain rounded pb-4 p-lg-4 text-white mainProfile">
          <div className="d-flex p-4 p-lg-0 justify-content-between align-items-center">
            <h5>پروفایل</h5>
            <DriveFileRenameOutlineRoundedIcon className="tagIcon editIcon" />
          </div>

          <div className="w-100 d-flex flex-column justify-content-center align-items-center mt-5">
            <img src="/imgs/logo.png" className="logo" />
            <h4 className="text-secondary mt-1">حانیه قربانی</h4>
          </div>

          <div className="profileInfosMain">
            <p>
              <EmojiFoodBeverageOutlinedIcon />
              طراح سایت
            </p>
            <p>
              <CalendarTodayOutlinedIcon />3 خرداد 1382
            </p>
            <p>
              <LocationOnOutlinedIcon />
              تهران
            </p>
            <p>
              <EmailOutlinedIcon />
              hnie.ghorbani@gmail.com
            </p>
            <p>
              <LocalPhoneOutlinedIcon />
              989121234567+
            </p>
          </div>
          <div className="w-50 mx-auto d-flex justify-content-between mb-3">
            <button className="btn btn-outline-secondary">
              <FacebookOutlinedIcon />
            </button>
            <button className="btn btn-outline-secondary">
              <TwitterIcon />
            </button>
            <button className="btn btn-outline-secondary">
              <GitHubIcon />
            </button>
          </div>
        </div>
        <div className="cardProfile1">
          <CardProfile title="تحصیلات" />
        </div>
        <div className="cardProfile2">
          <CardProfile title="تجربه کار" />
        </div>
      </div>
      <div className="leftSection text-white me-lg-4">
        <div className="bgMain rounded p-4 abilities">
          <h5>توانایی ها</h5>
          <div className="w-100 rounded-pill mt-5">
            <div className="w-75 rounded-pill d-flex justify-content-between px-3">
              <p>JavaScript</p>
              <p>75%</p>
            </div>
          </div>
          <div className="w-100 rounded-pill mt-4">
            <div className="w-50 rounded-pill d-flex justify-content-between px-3">
              <p>React</p>
              <p>50%</p>
            </div>
          </div>
          <div className="w-100 rounded-pill mt-4">
            <div className="w-100 rounded-pill d-flex justify-content-between px-3">
              <p>BootStrap</p>
              <p>100%</p>
            </div>
          </div>
          <div className="w-100 rounded-pill mt-4">
            <div className="w-100 rounded-pill d-flex justify-content-between px-3">
              <p>HTML,CSS</p>
              <p>100%</p>
            </div>
          </div>
        </div>
        <div className="bgMain rounded p-4 mt-4 ">
          <h5 className="mb-5">بیوگرافی</h5>
          <p className="text-secondary mb-4">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
            <br />
            <br />و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
            بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
            حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
            افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
            خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان
            امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ
            به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
            جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
            گیرد.
          </p>
          <div className="cards text-secondary d-flex flex-wrap justify-content-between">
            <div className="rounded p-3">
              <h6>برنامه های کاربردی Sass</h6>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
            <div className="rounded p-3">
              <h6>حسابدار Github</h6>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
            <div className="rounded p-3">
              <h6>عکاس</h6>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
            <div className="rounded p-3">
              <h6>اپلیکیشن موبایل</h6>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
