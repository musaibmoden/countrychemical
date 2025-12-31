import CompanyOverview from '@/components/about/CompanyOverview'
import MissionVision from '@/components/about/MissionVision'
import QualityCommitment from '@/components/about/QualityCommitment'

export default function AboutPage() {
  return (
    <div className="pt-20">
      <div className="bg-industrial-grey text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About Country Chemical</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Building excellence through innovative construction chemical solutions
          </p>
        </div>
      </div>
      <CompanyOverview />
      <MissionVision />
      <QualityCommitment />
    </div>
  )
}

