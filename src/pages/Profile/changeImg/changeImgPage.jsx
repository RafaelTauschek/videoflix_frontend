import React, { useState, useEffect } from "react";
import styles from "./changeImg.module.css";
import { ChevronLeft } from "lucide-react";
import IconButton from "@mui/material/IconButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProfilImgComponent({ onImgChangeClick }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1.3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const classic = [
    {
      image:
        "./src/assets/avatar/klassik/Default_standard_smile_boy_character_0.jpg",
    },
    {
      image:
        "./src/assets/avatar/klassik/Default_standard_smile_character_0.jpg",
    },
    {
      image:
        "./src/assets/avatar/klassik/Default_standard_smile_character_1 (1).jpg",
    },
    {
      image:
        "./src/assets/avatar/klassik/Default_standard_smile_character_1.jpg",
    },
    {
      image:
        "./src/assets/avatar/klassik/Default_standard_smile_man_character_0.jpg",
    },
  ];

  const comic = [
    { image: "./src/assets/avatar/comic/Default_hulk_joker_charakter_0.jpg" },
    { image: "./src/assets/avatar/comic/Default_iron_capton_america_0.jpg" },
    { image: "./src/assets/avatar/comic/Default_iron_hulk_1.jpg" },
    { image: "./src/assets/avatar/comic/Default_iron_joker_0.jpg" },
    { image: "./src/assets/avatar/comic/Default_iron_woman_1.jpg" },
  ];

  const anime = [
    {
      image:
        "./src/assets/avatar/anime/Default_one_piece_alternative_character_1.jpg",
    },
    {
      image:
        "./src/assets/avatar/anime/Default_one_piece_alternative_character_capton_0.jpg",
    },
    {
      image:
        "./src/assets/avatar/anime/Default_one_piece_alternative_character_capton_1.jpg",
    },
    {
      image:
        "./src/assets/avatar/anime/Default_one_piece_alternative_character_luffy_0.jpg",
    },
    {
      image:
        "./src/assets/avatar/anime/Default_one_piece_alternative_character_zoro_1.jpg",
    },
  ];

  const videosney = [
    {
      image:
        "./src/assets/avatar/videosney/Default_just_one_disney_animal_alternativ_character_in_profile_0.jpg",
    },
    {
      image:
        "./src/assets/avatar/videosney/Default_just_one_disney_animal_alternativ_character_in_profile_1 (1).jpg",
    },
    {
      image:
        "./src/assets/avatar/videosney/Default_just_one_disney_animal_alternativ_character_in_profile_1 (2).jpg",
    },
    {
      image:
        "./src/assets/avatar/videosney/Default_just_one_disney_animal_alternativ_character_in_profile_1 (3).jpg",
    },
    {
      image:
        "./src/assets/avatar/videosney/Default_just_one_disney_animal_alternativ_character_in_profile_1.jpg",
    },
  ];

  return (
    <div className={styles.avatarPickerContainer}>
      <div className={styles.avatarPickerContent}>
        <div className={styles.pickImgHeader}>
          <IconButton aria-label="back" size="large" onClick={onImgChangeClick}>
            <ChevronLeft height={"40"} width={"40"} color="white" />
          </IconButton>
          <h1 className={styles.avatar_h1}>Wähle einen Avatar</h1>
        </div>
        <div className={styles.VideoContent}>
          <div className={styles.VideoContainer}>
            <h2>Klassik</h2>
            <div className="slider-container">
              <Slider {...settings}>
                {classic.map((img, index) => (
                  <img key={index} src={img.image} className={styles.imgSize} />
                ))}
              </Slider>
            </div>
          </div>
          <div className={styles.VideoContainer}>
            <h2>Comic</h2>
            <div className="slider-container">
              <Slider {...settings}>
                {comic.map((img, index) => (
                  <img key={index} src={img.image} className={styles.imgSize} />
                ))}
              </Slider>
            </div>
          </div>
          <div className={styles.VideoContainer}>
            <h2>Anime</h2>
            <div className="slider-container">
              <Slider {...settings}>
                {anime.map((img, index) => (
                  <img key={index} src={img.image} className={styles.imgSize} />
                ))}
              </Slider>
            </div>
          </div>
          <div className={styles.VideoContainer}>
            <h2>Videosney</h2>
            <div className="slider-container">
              <Slider {...settings}>
                {videosney.map((img, index) => (
                  <img key={index} src={img.image} className={styles.imgSize} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
