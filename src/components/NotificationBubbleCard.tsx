import React from 'react';

interface NotificationBubbleCardProps {
  image: string;
  name: string;
  message: string;
  extraInfo?: string;
  amount?: string;
  position: 'top-right' | 'bottom-left' | 'bottom-right';
}

const positionClasses = {
  'top-right': 'absolute top-[-34px] right-8',
  'bottom-left': 'absolute bottom-56 left-[-24px]',
  'bottom-right': 'absolute bottom-16 right-16',
};

const NotificationBubbleCard: React.FC<
  NotificationBubbleCardProps
> = ({
  image,
  name,
  message,
  extraInfo,
  amount,
  position,
}) => {
  return (
    <div
      className={`${positionClasses[position]} bg-[#F2F7F3] p-2 rounded-lg shadow-lg flex items-center space-x-2 opacity-85`}
    >
      <img
        src={image}
        alt={name}
        className="w-8 h-8 rounded-full"
      />
      <div>
        <p className="text-sm font-bold">{name}</p>
        <p className="text-sm text-gray-700">
          <strong>{message}</strong>{' '}
          {extraInfo && (
            <span className="text-blue-500 font-bold">
              {extraInfo}{' '}
            </span>
          )}
          {amount && (
            <span className="text-green-500 font-bold">
              {amount}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default NotificationBubbleCard;
