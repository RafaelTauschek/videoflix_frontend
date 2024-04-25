import React, { useState, useEffect } from "react";
import styles from "./changeImg.module.css";
import { ChevronLeft } from "lucide-react";
import IconButton from "@mui/material/IconButton";

export default function ProfilImgComponent({ onImgChangeClick }) {
  const classic = [{image:"./src/assets/avatar/klassik/Default_standard_smile_boy_character_0.jpg",},
    {image:"./src/assets/avatar/klassik/Default_standard_smile_character_0.jpg",},
    {image:"./src/assets/avatar/klassik/Default_standard_smile_character_1 (1).jpg",},
    {image:"./src/assets/avatar/klassik/Default_standard_smile_character_1.jpg",},
    {image:"./src/assets/avatar/klassik/Default_standard_smile_man_character_0.jpg",},];

  const comic = [
    {image:"./src/assets/avatar/comic/Default_hulk_joker_charakter_0.jpg",},
    {image:"./src/assets/avatar/comic/Default_iron_capton_america_0.jpg",},
    {image:"./src/assets/avatar/comic/Default_iron_hulk_1.jpg",},
    {image:"./src/assets/avatar/comic/Default_iron_joker_0.jpg",},
    {image:"./src/assets/avatar/comic/Default_iron_woman_1.jpg",},];

  const anime = [
    {image:"./src/assets/avatar/anime/Default_one_piece_alternative_character_1.jpg",},
    {image:"./src/assets/avatar/anime/Default_one_piece_alternative_character_capton_0.jpg",},
    {image:"./src/assets/avatar/anime/Default_one_piece_alternative_character_capton_1.jpg",},
    {image:"./src/assets/avatar/anime/Default_one_piece_alternative_character_luffy_0.jpg",},
    {image:"./src/assets/avatar/anime/Default_one_piece_alternative_character_zoro_1.jpg",},];

  const videosney = [
    {image:"./src/assets/avatar/videosney/Default_just_one_disney_animal_alternativ_character_in_profile_0.jpg",},
    {image:"./src/assets/avatar/videosney/Default_just_one_disney_animal_alternativ_character_in_profile_1 (1).jpg",},
    {image:"./src/assets/avatar/videosney/Default_just_one_disney_animal_alternativ_character_in_profile_1 (2).jpg",},
    {image:"./src/assets/avatar/videosney/Default_just_one_disney_animal_alternativ_character_in_profile_1 (3).jpg",},
    {image:"./src/assets/avatar/videosney/Default_just_one_disney_animal_alternativ_character_in_profile_1.jpg",},];

  return (
    <div className={styles.avatarPickerContainer}>
      <div style={{ maxWidth: "1440px"}}>
        <div className={styles.pickImgHeader}>
          <IconButton aria-label="back" size="large" onClick={onImgChangeClick}>
            <ChevronLeft height={"40"} width={"40"} color="white" />
          </IconButton>
          <h1>Wähle einen Avatar</h1>
        </div>
        <div className={styles.VideoContainer}>
          <h2>Klassik</h2>
          <div className={styles.imagesInSlider}>
            {classic.map((img, index) => (
              <img src={img.image} alt="" style={{ height: "140px" }} />
            ))}
          </div>
        </div>
        <div className={styles.VideoContainer}>
          <h2>Comic</h2>
          <div className={styles.imagesInSlider}>
            {comic.map((img, index) => (
              <img src={img.image} alt="" style={{ height: "140px" }} />
            ))}
          </div>
        </div>
        <div className={styles.VideoContainer}>
          <h2>Anime</h2>
          <div className={styles.imagesInSlider}>
            {anime.map((img, index) => (
              <img src={img.image} alt="" style={{ height: "140px" }} />
            ))}
          </div>
        </div>
        <div className={styles.VideoContainer}>
          <h2>Videosney</h2>
          <div className={styles.imagesInSlider}>
            {videosney.map((img, index) => (
              <img src={img.image} alt="" style={{ height: "140px" }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
