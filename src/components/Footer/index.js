import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import{FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" arial-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" arial-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" arial-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" arial-label="LinkedIn">
                                <FaLinkedin/>
                            </SocialIconLink>

                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
