//import * as images from "../../assets/gems/"
import { readdir, writeFile } from "fs/promises";
import { useEffect, useState } from "react";
import { getAllFiles, getAllFilesSync } from "get-all-files";

const images = [
  "Azure",
  "Emerald",
  "Jade",
  "Purple",
  "Pyro",
  "Ruby",
  "Saphire",
  "Thunder",
  "Tigerseye",
];
const basePath = "/src/assets/gems/gem";

export default function ImageLinkOptions() {
  return (
    <select name="imageLink" className="rounded">
      {images.map((res) => {
        return <option value={"gem" + res + ".png"}>{res}</option>;
      })}
    </select>
  );
}
