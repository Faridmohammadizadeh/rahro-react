import React from 'react'
import './profileHeader.css'
import banner from "../../../assets/banner1.jpg"
import avatar from "../../../assets/avatar.jpg"

const ProfileHeader = () => {
    return (
        <div>
            <div className='profile__container'>
                <div className='profile__container__main'>
                    <div className='profile__container__main-banner' style={{ backgroundImage: `url(${banner})` }}>

                    </div>
                    <div className='profile__container__main-content'>
                        <div className='profile__container__main-content-avatar' style={{ backgroundImage: `url(${avatar})` }}>
                        </div>
                        <div className='profile__container__main-content-top'>
                            <div className='profile__container__main-content-top-name'>
                                <h2>محمد حسین محمدی زاده</h2>
                                <h3>فول استک دولوپر</h3>
                            </div>
                            <div className='profile__container__main-content-top-pricing'>
                                <button>درخواست منتورینگ</button>
                                <div className='profile__container__main-content-top-pricing-content'>هر ساعت منتورینگ: <span>500.000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='profile__container__main-content-bottom'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخ، چاپگرها و متون بلکه روزنامه و مجله در ستوای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص ط</div>

                </div>


            </div>
        </div>
    )
}

export default ProfileHeader