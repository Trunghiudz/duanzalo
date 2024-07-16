import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import "../../index.css"

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
const Page = () => {
    const [avt,] = useState("http://picsum.photos/id/35/300/300")
    return (

        <div className='flex'>
            <div className='w-[27%] h-screen'>
                <aside className='w-[27%] h-screen fixed top-0 left-0 z-50'>
                    <div className='flex'>
                        <div className='flex flex-col items-center bg-blue-400 py-8 w-1/6 h-screen gap-4'>
                            <div className='size-12 rounded-full overflow-hidden border'><img src={avt} alt="" /></div>
                            <div className='flex flex-col items-center w-full'>
                                <span className='bg-blue-600 w-full text-center text-2xl py-3 text-white'><i className="fa-regular fa-comment-dots"></i></span>
                                <span className='hover:bg-blue-500 w-full text-center text-2xl py-3 text-white'><i className="fa-solid fa-clock"></i></span>
                            </div>
                        </div>
                        <div className='flex-1 border-r w-5/6 bg-white'>
                            <div className='border-b'>
                                <div className='px-4 flex items-center justify-between py-4'>
                                    <div className="relative">
                                        <input type="text" className="border  bg-slate-200 rounded-md py-[2px] pl-8 pr-8 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white placeholder:text-sm placeholder:text-slate-500" placeholder="Tìm kiếm" />
                                        <button><i className="fa-solid fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 text-sm " /></button>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <span className='text-sm hover:bg-slate-200 py-[6px] px-1 rounded-sm'><i className="fa-solid fa-user-plus"></i></span>
                                        <span className='text-sm hover:bg-slate-200 py-[6px] px-1 rounded-sm'><i className="fa-solid fa-user-group"></i></span>
                                    </div>
                                    
                                </div>
                                <div className='px-4 flex justify-between items-center'>
                                    <div className='flex items-center gap-3'>
                                        <button className='text-sm font-semibold border-b-2 border-blue-600 pb-1 text-blue-600 hover:text-blue-600'>Tất cả</button>
                                        <button className='text-sm font-semibold text-gray-400 pb-1 hover:text-blue-600'>Chưa đọc</button>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className='flex items-center gap-2 text-sm py-1 px-1 hover:bg-slate-200 hover:rounded-xl'>
                                            <button className='text-xs px-1'>Phân loại</button>
                                            <button className='text-xs '><i className="fa-solid fa-chevron-down"></i></button>
                                        </div>
                                        <span className='text-sm hover:rounded-full hover:bg-slate-200 px-1'><i className="fa-solid fa-ellipsis"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='px-4 bg-blue-100'>
                                    <div className='flex justify-between py-3 '>
                                        <div className='flex items-center gap-3'>
                                            <div className='size-12 rounded-full overflow-hidden border'><img src={avt} alt="" /></div>
                                            <div className='flex flex-col gap-1'>
                                                <span className='text-black font-normal'>Bùi Văn Đoàn</span>
                                                <span className='text-gray-400 font-normal'>Bạn: oki</span>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <button className='text-xs hover:bg-blue-300 px-1 py-[2px] rounded-sm text-gray-500'><i className="fa-solid fa-ellipsis"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-4 hover:bg-slate-100'>
                                    <div className='flex justify-between py-3 '>
                                        <div className='flex items-center gap-3'>
                                            <div className='size-12 rounded-full overflow-hidden border'><img src={avt} alt="" /></div>
                                            <div className='flex flex-col gap-1'>
                                                <span className='text-black font-normal'>Nguyễn Đá Trọng</span>
                                                <span className='text-gray-400 font-normal'>Bạn: oki</span>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <button className='text-xs hover:bg-blue-300 px-1 py-[2px] rounded-sm text-gray-500'><i className="fa-solid fa-ellipsis"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

            <main className='w-[73%] h-screen'>
                <div className='hidden'>
                    <div className='flex flex-col items-center py-24'>
                        <div className='flex flex-col items-center w-[415px] text-sm gap-5'>
                            <h1 className='text-2xl font-normal'>Chào mừng đến với <a className='font-semibold'> Zalo PC!</a></h1>
                            <span className='text-center'>Khám pá những tiện ích hỗ trợ làm việc và trò truyện cùng người thân, bạn bè được tối ưu hoá cho máy tính của bạn</span>
                        </div>
                        <div className='w-[1100px]'>
                            <Swiper cssMode={true}
                                navigation={{
                                    nextEl: '.swiper-button-next-custom',
                                    prevEl: '.swiper-button-prev-custom',
                                }}
                                pagination={true}
                                mousewheel={true}
                                keyboard={true}
                                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                                className="mySwiper">
                                <SwiperSlide className='flex flex-col items-center py-10 gap-3'>
                                    <span className='text-[150px] h-auto'>
                                        <i className="fa-solid fa-envelopes-bulk"></i>
                                    </span>
                                    <span className='text-blue-600 text-lg font-semibold'>Nhắn tin nhiều hơn, soạn thảo ít hơn</span>
                                    <span className='text-sm'>
                                        Sử dụng <a className='font-semibold'>Tin Nhắn Nhanh để lưu</a> sẵn các tin nhắn thường dùng và gửi nhanh trong hội thoại bất kỳ.
                                    </span>
                                </SwiperSlide>
                                <SwiperSlide className='flex flex-col items-center py-10 gap-3'>
                                    <span className='text-[150px] h-auto'>
                                        <i className="fa-solid fa-user-group"></i>
                                    </span>
                                    <span className='text-blue-600 text-lg font-semibold'>Tin nhắn tự xoá</span>
                                    <span className='text-sm'>
                                        Từ giờ tin nhắn có thể tự động xoá sau khoảng thời gian nhất định
                                    </span>
                                </SwiperSlide>
                                <SwiperSlide className='flex flex-col items-center py-10 gap-3'>
                                    <span className='text-[150px] h-auto'>
                                        <i className="fa-solid fa-user-group"></i>
                                    </span>
                                    <span className='text-blue-600 text-lg font-semibold'>Trải nghiệm xuyên suốt</span>
                                    <span className='text-sm'>
                                        Kết nối và giải quyết công việc trên mọi thiết bị với dữ liệu luôn được đồng bộ
                                    </span>
                                </SwiperSlide>
                                <div className="swiper-button-next-custom text-2xl absolute top-1/2 transform -translate-y-1/2 right-2  text-blue-500 p-2 rounded-full cursor-pointer z-10">
                                    <i className="fa-solid fa-chevron-right"></i>
                                </div>
                                <div className="swiper-button-prev-custom text-2xl absolute top-1/2 transform -translate-y-1/2 left-2 text-blue-500 p-2 rounded-full cursor-pointer z-10">
                                    <i className="fa-solid fa-chevron-left"></i>
                                </div>

                            </Swiper>
                        </div>


                    </div>
                </div>
                <div>
                    <div>
                        <div className='flex justify-between items-center px-4 py-3'>
                            <div className='flex items-center gap-3'>
                                <div className='size-12 rounded-full overflow-hidden border'><img src={avt} alt="" /></div>
                                <div className='flex flex-col'>
                                    <span className='font-semibold text-lg'>Bùi Văn Đoàn</span>
                                    <span className='text-sm '><i className="fa-brands fa-font-awesome"></i></span>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <span className='px-1 py-1 rounded-sm hover:bg-slate-200'><i className="fa-solid fa-user-group"></i></span>
                                <span className='px-1 py-1 rounded-sm hover:bg-slate-200'><i className="fa-solid fa-magnifying-glass"></i></span>
                                <span className='px-1 py-1 rounded-sm hover:bg-slate-200'><i className="fa-solid fa-video" /></span>
                                <span className='px-1 py-1 rounded-sm hover:bg-slate-200'><i className="fa-solid fa-phone" /></span>
                                
                            </div>
                        </div>   
                    </div>
                </div>

            </main>
        </div>


    )
}

export default Page
