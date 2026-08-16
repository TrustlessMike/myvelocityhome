import { MortgageCalculator } from "@/components/mortgage-calculator";
import { MainLayout } from "@/components/main-layout";

export default function CalculatorPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div id="calculator-section" className="pt-8 mt-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mortgage Calculator</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Use our calculator to estimate your monthly mortgage payments and explore different loan scenarios.
            </p>
          </div>
          <MortgageCalculator />
        </div>
      </div>
    </MainLayout>
  );
} 