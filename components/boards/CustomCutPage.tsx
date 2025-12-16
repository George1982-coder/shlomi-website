'use client';

import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { BoardConfiguration } from '@/types/boards';
import { boardTypes, materialOptions, colorOptions, edgeBandingOptions, relatedProducts } from '@/data/boardsData';

import BoardIntroSection from './BoardIntroSection';
import BoardDimensionsForm from './BoardDimensionsForm';
import BoardTypeSelector from './BoardTypeSelector';
import MaterialSelector from './MaterialSelector';
import ColorSelector from './ColorSelector';
import EdgeBandingSelector from './EdgeBandingSelector';
import OrderSummaryActions from './OrderSummaryActions';
import BoardInstructions from './BoardInstructions';
import RelatedProductsSection from './RelatedProductsSection';

export default function CustomCutPage() {
  const [config, setConfig] = useState<BoardConfiguration>({
    width: null,
    length: null,
    boardTypeId: null,
    materialId: null,
    colorId: null,
    edgeBandingId: null,
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-primary-600 transition-colors">דף הבית</a>
            <ChevronLeft className="w-4 h-4 rotate-180" />
            <a href="/boards" className="hover:text-primary-600 transition-colors">חיתוך לפי מידה</a>
            <ChevronLeft className="w-4 h-4 rotate-180" />
            <span className="text-gray-900 font-medium">חיתוך עץ לפי מידה</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-200">
        <div className="container-custom py-12">
          <h1 className="heading-lg text-gray-900 mb-4">
            חיתוך עץ לפי מידה
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            הזמינו לוחות עץ, MDF או מלמין בחיתוך מדויק לפי המידות שלכם. בחרו מתוך מגוון 
            חומרים, גוונים ואפשרויות גימור, והתאימו את הלוח בדיוק לפרויקט שלכם.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-12">
        {/* Intro Section with Images */}
        <BoardIntroSection />

        {/* Dimensions Form */}
        <BoardDimensionsForm
          width={config.width}
          length={config.length}
          onWidthChange={(value) => setConfig({ ...config, width: value })}
          onLengthChange={(value) => setConfig({ ...config, length: value })}
        />

        {/* Board Type Selector */}
        <BoardTypeSelector
          boardTypes={boardTypes}
          selectedId={config.boardTypeId}
          onSelect={(id) => setConfig({ ...config, boardTypeId: id })}
        />

        {/* Material Selector */}
        <MaterialSelector
          materials={materialOptions}
          selectedId={config.materialId}
          onSelect={(id) => setConfig({ ...config, materialId: id })}
        />

        {/* Color Selector */}
        <ColorSelector
          colors={colorOptions}
          selectedId={config.colorId}
          onSelect={(id) => setConfig({ ...config, colorId: id })}
        />

        {/* Edge Banding Selector */}
        <EdgeBandingSelector
          options={edgeBandingOptions}
          selectedId={config.edgeBandingId}
          onSelect={(id) => setConfig({ ...config, edgeBandingId: id })}
        />

        {/* Order Actions */}
        <OrderSummaryActions config={config} />

        {/* Instructions */}
        <BoardInstructions />

        {/* Related Products */}
        <RelatedProductsSection products={relatedProducts} />
      </div>
    </div>
  );
}

