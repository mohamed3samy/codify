import Image from 'next/image';
import Link from 'next/link';

import RenderTag from './RenderTag';
// import { getHotQuestions } from '@/lib/actions/question.action';
// import { getTopPopularTags } from '@/lib/actions/tag.actions';

const RightSidebar = () => {
  //   const hotQuestions = await getHotQuestions();
  //   const popularTags = await getTopPopularTags();

  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div className="dark:text-light-900 text-light-400">RightSidebar</div>
    </section>
  );
};

export default RightSidebar;
