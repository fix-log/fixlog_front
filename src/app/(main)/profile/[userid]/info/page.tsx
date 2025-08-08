'use client';

import { userInfoStore } from '@/entities/userInfo/UserInfoStore';
import { FileText, IdCard, Languages, Link, MousePointerClick, PenTool } from 'lucide-react';

const ICON_SIZE = 17;

export default function ProfileInfoPage() {
  const userData = userInfoStore((s) => s.userInfo);
  const userInfoList = [
    {
      icon: <IdCard size={ICON_SIZE} />,
      label: '포지션',
      value: userData.position,
    },
    {
      icon: <Languages size={ICON_SIZE} />,
      label: '개발 언어',
      value: userData.language,
    },
    {
      icon: <MousePointerClick size={ICON_SIZE} />,
      label: '기술 스택',
      value: userData.tech,
    },
    {
      icon: <PenTool size={ICON_SIZE} />,
      label: '디자인 협업툴',
      value: userData.coop_tool,
    },
    {
      icon: <FileText size={ICON_SIZE} />,
      label: '포트폴리오',
      value: userData.portfolio,
    },
    {
      icon: <Link size={ICON_SIZE} />,
      label: '참고 링크',
      value: userData.ref_link,
    },
  ];  
  return userInfoList.map((item) => (
    <div key={Date.now()} className='bg-mainWhite text-mainRed flex items-center py-[30px] pl-[104px] font-semibold my-[19px]'>
      <div className='flex w-full max-w-[280px] items-center'>
        {item.icon}
        <p className='pl-[28px]'>{item.label}</p>
      </div>
      <p className='text-mainBlack'>{item.value}</p>
    </div>
  ));
}
