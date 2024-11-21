export interface MemberProps {
    name: string;
    school: string;
    role: string;
    image: string;
    bio: string;
  }

export interface TeamMemberProps {
    member: MemberProps;
    isActive: boolean;
    onClick: () => void;
}
  