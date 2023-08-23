import NavItem from '../component/common/nav-item';
import './style.css';

import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { ImLocation2 } from 'react-icons/im';
//==========================================
const Footer = () => {
  return (
    <>
      <div className='container-floid'>
        <hr />
        <div className='row px-4 justify-content-between '>
          <div className='col-2 '>
            <div>
              <img width={100} src='/logo-2.png' />
            </div>
            <NavItem
              description={
                'شرکت انگیزه نگار خاوران درسال ۱۳۸۰ باهدف توسعه فرهنگ فن آوری اطلاعات توسط تیمی از کارشناسان ارشد نرم افزار و الکترونیک از بهترین دانشگاه های کشور تاسیس گردید.'
              }
            />
          </div>
          <div className='col-4'>
            <p className='fs-4 fw-bold '> آخرین اخبار و مقالات</p>
            <NavItem
              description={
                'تحول دیجیتال (Digital Transformation) چیست و چرا اهمیت دارد؟'
              }
            />
            <NavItem
              description={
                'نصب و بهره‌برداری آزمایشی از اولین سیستم مانیتورینگ هوشمند گلخانه‌ای'
              }
            />
            <NavItem description={'سنجش از راه دور'} />
            <NavItem
              description={
                'نمونه جداول زمانی (برگه های تایم شیت) قابل چاپ و رایگان'
              }
            />
          </div>
          <div className='col-4'>
            <p className='fs-4 fw-bold '>ارتباط با ما </p>
            <NavItem
              title={'تماس :'}
              description={'۰۵۱۹۱۰۲۳۳۸۳'}
              icon={<AiFillPhone />}
            />
            <NavItem
              title={'ایمیل :'}
              description={'info@angizehco.com'}
              icon={<AiOutlineMail />}
            />
            <NavItem
              title={'آدرس :'}
              description={
                'مشهد،میدان جانباز، برج مروارید گوهرشاد، طبقه ۱۳، واحد۴'
              }
              icon={<ImLocation2 />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
