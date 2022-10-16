import React from 'react';
import brand from '../assets/icons/brand.svg';
import campaigns from '../assets/icons/campaigns.svg';
import insights from '../assets/icons/insights.svg';
import optimize from '../assets/icons/optimize.svg';
import product from '../assets/icons/product.svg';
import target from '../assets/icons/target.svg';

export const SectionTools = () => {
  return (
    <div className="w-full flex flex-col space-y-8 items-center justify-center py-12 bg-teal-50">
      <p className="font-bold text-2xl tracking-wider">
        Simple tools for every business
      </p>
      <p className="pb-12 text-center tracking-wide">
        A complete business toolkit
      </p>
      <div className="w-4/5 flex flex-wrap justify-between">
        <div className="flex flex-col space-y-2 pb-8 w-72">
          <img alt="brand" src={brand} width={100} />
          <p className="text-xl">Manage Brand Pages</p>
          <p className="text-sm">
            Stylized, emotional representations of your brand using images &
            videos.
          </p>
        </div>
        <div className="flex flex-col space-y-2 pb-8 w-72">
          <img alt="product" src={product} width={100} />
          <p className="text-xl">Showcase Your Product</p>
          <p className="text-sm">
            Create, categorize and showcase your product cataglogue
          </p>
        </div>
        <div className="flex flex-col space-y-2 pb-8 w-72">
          <img alt="target" src={target} width={100} />
          <p className="text-xl">Target User Precisely</p>
          <p className="text-sm">
            Define your audience for smarter ad targeting. Adjust your target
            audience to be as broad or well-defined as you like.
          </p>
        </div>
        <div className="flex flex-col space-y-2 pb-8 w-72">
          <img alt="campaigns" src={campaigns} width={100} />
          <p className="text-xl">Create & Manage Campaigns</p>
          <p className="text-sm">
            Select campaign parameters, such as an advertising objective and
            manage everything on go
          </p>
        </div>
        <div className="flex flex-col space-y-2 pb-8 w-72">
          <img alt="insights" src={insights} width={100} />
          <p className="text-xl">Get Real-time Insights</p>
          <p className="text-sm">
            Real time insights and analystics to better understand the impact
            for your campaign
          </p>
        </div>
        <div className="flex flex-col space-y-2 pb-8 w-72">
          <img alt="optimize" src={optimize} width={100} />
          <p className="text-xl">Optimize and Get Better</p>
          <p className="text-sm">
            Do testings and optimization for Search Engines to improve
            performance over a period of time
          </p>
        </div>
      </div>
    </div>
  );
};
