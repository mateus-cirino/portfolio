import React from 'react';
import Image from 'next/image';
import ProfileImageStyle from './style';
import profileImage from '../../../public/images/profile-image.png';

const ProfileImage = () => (
  <ProfileImageStyle>
    <Image
      className="profileImage"
      src={profileImage}
      alt="Foto de perfil de Mateus Cirino"
    />
  </ProfileImageStyle>
);

export default ProfileImage;
