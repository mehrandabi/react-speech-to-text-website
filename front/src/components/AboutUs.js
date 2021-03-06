require('normalize.css/normalize.css');
require('../styles/aboutus.css');

import React from 'react';
import FooterComponent from './Footer';

class AboutUs extends React.Component{
  render() {
    const spanStyle = {
      color: 'orange'
    }
    return(
      <div className="transition-item">
        <div className="aboutus">
        <span style={spanStyle}>شرکت فرادید</span>
        در سال 1390 با نگرش ایجاد گسترش بازار در حوزه هوش مصنوعی گرایش بینایی ماشین فعالیت خود را آغاز نمود. این شرکت با جذب نیروهای خبره در این حوزه، توانست در مدت زمان کوتاهی اقدام به تولید و بومی سازی نرم افزارهای مختلفی در این زمینه نماید. بینایی ماشین&nbsp;که گاهی بینایی کامپیوتر و پردازش تصویر نیز خوانده می شود، بر آن است که از طریق تحلیل خودکارتصویرو ویدیوقابلیت شبیه سازی، تفسیر، و درک جهان پیرامون را به رایانه ها ( یا وسایل هوشمند دیگر از قبیل تلفن همراه، تبلت، بردهای الکترونیکی و …) اعطا کند. از آنجا که هدف نهایی بینایی ماشین پیشی گرفتن از بینایی انسان است پژوهش های مربوط به این حوزه، معمولاْ دانش وسیعی را در حوزه های مختلف از قبیل علوم کامپیوتر، مهندسی برق، ریاضیات، فیزیولوژی، روانشناسی، بیولوژی، و علوم شناخت نیاز دارند واین شرکت با علم به این موضوع کادر فنی خود را از بین مجرب ترین فارغ التحصیلان دانشگاه های برتر کشور در زمینه های هوش مصنوعی، مهندسی نرم افزار، مهندسی رباتیک، مهندسی الکترونیک، مهندسی مخابرات، مهندسی کنترل، و علوم شناخت انتخاب کرده است.<br/><br/>
        شرکت فرادید طی پنج سال فعالیت خود و همکاری با شرکت ساختارهای اطلاع رسانی نوین گستر(<strong>سان</strong>) محصولات بسیاری را در حوزه های مدیریت ترافیک شهری، تحلیل رخدادهای ورزشی، حفاظت محیط زیست، حفاظت فیزیکی ساختمان ها، اتوماسیون صنعتی، و کنترل خطوط تولید ارایه کرده است که با استقبال بی نظیر سازمان های دولتی، شرکت های خصوصی، و مشتریان حقیقی همراه گردیده است. محصولات طراحی شده توسط شرکت فرادید در حوزه های زیر دستبه بندی می شوند:
        <ul>
                  <li>فرا تجارت: سامانه هوشمند تحلیل رفتار مصرف کننده</li>
                  <li>فرافوتبال: سامانه آنالیز و تحیل رفتار بازیکنان، داوران و توپ</li>
                  <li>فراپلاک: سامانه خودکارتفکیک و تشخیص پلاک وسایل نقلیه</li>
                  <li>فرا امنیت : سامانه آنالیز و پردازش تصاویر در حوزه حفاظت پیرامونی</li>
                  <li>فرا صنعت: سامانه هوشمند آنالیز و پردازش تصاویر در حوزه صنایع مختلف</li>
                  <li>فراهتل: سامانه هوشمند آنالیز و پردازش تصاویر در حوزه کنترل و امنیت محیط هتل</li>
                  <li>فرابانک: سامانه هوشمند آنالیز و پردازش تصاویر در حوزه کنترل و امنیت محیط بانک</li>
                  <li>فرا ترافیک: سامانه هوشمند شناسایی پارامتر های ترافیکی و تشخیص تخلفات ترافیکی</li>
                  <li>فرا بیمارستان: سامانه هوشمند آنالیز و پردازش تصاویر در حوزه کنترل و امنیت محیط بیمارستان</li>
        </ul>
        <br/>
        <span style={spanStyle}><strong>فرادید</strong></span> به‌عنوان شرکتی آشنا به فناوری روز دنیا، مورد اعتماد سازمان های مختلف، استقبال‌کننده از تغيير و تحول، و کارآفرين بر آن است تا با بهره گیری از راهکارهای هوش مصنوعی، از طریق همکاری با سازمان ها و ارگان های بزرگ و کوچک دولتی و خصوصی نقشی هر چند کوچک در افزایش کارایی حوزه های مختلف کشور ایفا کند. از اینکه محصولات تولید گشته مورد قبول جامعه قرار گرفته است به‌خود می‌باليم و به مسئوليت‌های سنگين خود در ادامه راه نيز واقفيم. امید است بتوانیم در راستای اعتلای صنعت کشورو تسهیل زندگی ایرانیان توفیق حاصل نمائیم.

        </div>
        <FooterComponent/>
      </div>
    )
  }
}

export default AboutUs;
