
import React, { useState } from 'react';

import MediaThree from '@components/partials/product/media/media-three';
import DetailOne from '@components/partials/product/detail/detail-one';

const ProductImageWithDesc = (node) => {

    const [product, setProduct] = useState(node.product);

    return (
        <div className="product product-single row mb-2">
            <div className="col-md-6">
                <MediaThree product={product} />
            </div>
            <div className="col-md-6">
                <DetailOne product={product} data={{}} isStickyCart isDesc={true} onChangeVariant={setProduct} />
            </div>

        </div>
    )
}

export default ProductImageWithDesc;