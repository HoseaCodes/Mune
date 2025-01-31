import React from 'react';

interface BioOverlayProps {
  name: string;
  school: string;
  role: string;
  image: string;
  bio: string;
  onClose: () => void;
}

const BioOverlay: React.FC<BioOverlayProps> = ({
  name,
  school,
  role,
  image,
  bio,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-stone-950/75 z-50 p-4">
      <div className="webkit-fill bg-white p-6 rounded-lg shadow-lg w-full max-w-[90%] md:max-w-[800px] mx-auto relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">
          &times;
        </button>
        <img
          src={image}
          alt={name}
          className="block w-24 h-24 md:w-40 md:h-40 rounded-full shadow-md mb-4 mx-auto"
        />
        <h3 className="text-black text-xl font-bold text-center">{name}</h3>
        <p className="text-gray-600 italic text-center">{school}</p>
        <p className="text-gray-800 mt-2 text-center">{role}</p>
        <div className="w-full text-gray-800 mt-2 text-center">
          <p dangerouslySetInnerHTML={{ __html: bio }}></p>
        </div>
      </div>
    </div>
  );
};

export default BioOverlay;
