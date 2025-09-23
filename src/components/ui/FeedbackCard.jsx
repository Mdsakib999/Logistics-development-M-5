import profilePic from "../../assets/profile.png";
import Paragraph from '../ui/Paragraph';
import { Star } from 'lucide-react';
export default function FeedbackCard({ number }) {
  return (
    <div className="bg-primary flex flex-col gap-6 w-4/5 mx-auto md:w-1/3 rounded-2xl p-6">
      {/* image section */}
      <div className="flex justify-between">
        <img className="rounded-lg" src={profilePic} alt="profilePic" />
        <span className="text-secondary">{number}</span>
      </div>
      {/* review section */}
      <div className="space-y-2">
        <div className="flex gap-1">
          <Star fill="#e5f67c" strokeWidth={0} />
          <Star fill="#e5f67c" strokeWidth={0} />
          <Star fill="#e5f67c" strokeWidth={0} />
          <Star fill="#e5f67c" strokeWidth={0} />
          <Star fill="#e5f67c" strokeWidth={0} />
        </div>

        <Paragraph>
          Lorem morbi et amet suscipit. At sed proin quis risus urna a. Magna in
          odio in urna amet ultrices fermentum.
        </Paragraph>
      </div>
      <hr className="border-[#DEE2DD] border-1" />
      <h6 className="text-secondary pb-4">David Parkar</h6>
    </div>
  );
}
