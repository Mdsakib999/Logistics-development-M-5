import profilePic from "../../assets/profile.png";
import Paragraph from '../ui/Paragraph';
import { Star } from 'lucide-react';

export default function FeedbackCard() {
  return (
    <div className="bg-primary flex flex-col mb-16 gap-6 mx-8 sm:mx-auto rounded-2xl p-6">
      {/* image and info section */}
      <div className="flex gap-4 items-start">
        <img className="rounded-lg w-16 h-16 object-cover" src={profilePic} alt="profilePic" />
        <div className="flex-1">
          <h6 className="text-secondary font-semibold text-lg">David Parkar</h6>
          <p className="text-white opacity-60 text-sm mt-1">CEO, Tech Company</p>
        </div>
      </div>

      {/* review section */}
      <div className="space-y-2">
        <Paragraph className="text-white opacity-80 leading-relaxed">
          Lorem morbi et amet suscipit. At sed proin quis risus urna a. Magna in
          odio in urna amet ultrices fermentum.
        </Paragraph>
      </div>

      <hr className="border-white border-opacity-20" />

      {/* rating section */}
      <div className="flex gap-1">
        <Star fill="#FCD34D" strokeWidth={0} size={20} className="text-yellow-300" />
        <Star fill="#FCD34D" strokeWidth={0} size={20} className="text-yellow-300" />
        <Star fill="#FCD34D" strokeWidth={0} size={20} className="text-yellow-300" />
        <Star fill="#FCD34D" strokeWidth={0} size={20} className="text-yellow-300" />
        <Star fill="#FCD34D" strokeWidth={0} size={20} className="text-yellow-300" />
      </div>
    </div>
  );
}