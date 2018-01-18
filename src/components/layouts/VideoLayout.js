import React from "react";
import {
  LayoutSection,
  BackgroundImage,
  Overlay,
  FlexWrap,
  LayoutHeader,
  LayoutBlurb,
  Button
} from "../Styles";
import styled from "styled-components";

const VideoSection = LayoutSection.extend`
  height: 720px;
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const Video = styled.video`
  display: block;
  background-image: ${props => `url(${props.url})`};
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: relative;
`;

const ContentWrap = FlexWrap.extend`
  height: 100%;
  justify-content: center;
`;

const Content = styled.div`
  color: #fff;
  text-align: center;
`;

const VideoLayout = props => (
  <VideoSection>
    <Video
      url={
        props.layout.video_fallback_image.localFile.childImageSharp.resolutions
          .src
      }
      poster={
        props.layout.video_fallback_image.localFile.childImageSharp.resolutions
          .src
      }
      controls={
        props.layout.video_attributes.includes("controls") ? true : null
      }
      muted={props.layout.video_attributes.includes("muted") ? true : null}
      autoPlay={
        props.layout.video_attributes.includes("autoplay") ? true : null
      }
      loop={props.layout.video_attributes.includes("loop") ? true : null}
    >
      {props.layout.video_webm_file ? (
        <source src={props.layout.video_webm_file} type="video/webm" />
      ) : null}
      {props.layout.video_mp4_file ? (
        <source src={props.layout.video_mp4_file} type="video/mp4" />
      ) : null}
      {props.layout.video_ogv_file ? (
        <source src={props.layout.video_ogv_file} type="video/ogg" />
      ) : null}
    </Video>
    {props.layout.header || props.layout.blurb ? (
      <Overlay>
        <ContentWrap>
          <Content>
            {props.layout.header ? (
              <LayoutHeader>{props.layout.header}</LayoutHeader>
            ) : null}
            {props.layout.blurb ? (
              <LayoutBlurb
                dangerouslySetInnerHTML={{ __html: props.layout.blurb }}
              />
            ) : null}
            {props.layout.add_button ? (
              <Button
                to={props.layout.button_link.url}
                target={props.layout.button_link.target}
              >
                {props.layout.button_link.title}
              </Button>
            ) : null}
          </Content>
        </ContentWrap>
      </Overlay>
    ) : null}
  </VideoSection>
);

export default VideoLayout;
