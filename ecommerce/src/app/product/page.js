import React from 'react';
import ProductCard from '@/app/components/common/ProductCard';
function page() {
  return (
    <div>
      <h1 className='text-2xl font-bold'>Products</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
        <ProductCard title='Product 1' description='Description of Product 1' price='$10.00' />
        <ProductCard title='Product 2' description='Description of Product 2' price='$20.00' />
        <ProductCard title='Product 3' description='Description of Product 3' price='$30.00' />
        <ProductCard title='Product 4' description='Description of Product 4' price='$40.00' />
      </div>
    </div>
  );
}

export default page;
