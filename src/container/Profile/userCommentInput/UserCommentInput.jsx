import React from 'react'
import "./userCommentInput.css"

const UserCommentInput = () => {
    return (
        <div className='userCommentInput'>
            <div className='userCommentInput__main'>
                <div className='userCommentInput__main__top'>
                    <div className='userCommentInput__main__top-title'>
                        <div className='userCommentInput__main__top-title-button'>
                            ثبت بازخورد

                        </div>
                    </div>
                    <div className='userCommentInput__main__top-rating'>
                        ⭐⭐⭐⭐⭐
                    </div>
                </div>
                <div className='userCommentInput__main__line'></div>
                <div className='userCommentInput__main__bottom'>
                    {/* <input type="text" placeholder='نظر و تجربتو ثبت کن ' /> */}
                    <textarea className='userCommentInput__main__bottom-textarea' rows="4" cols="4" name="description" placeholder='نظر و تجربتو ثبت کن
'>
                    </textarea>

                </div>

            </div>
        </div>
    )
}

export default UserCommentInput