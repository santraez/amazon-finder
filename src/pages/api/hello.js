import * as cheerio from 'cheerio';
import axios from 'axios';

export default async function handler(req, res) {
  const { url } = req.query;
  const { data } = await axios.get(url);  
  const $ = cheerio.load(data);
  const $title = $('#productTitle').text();
  const $price = $('#corePrice_feature_div .a-offscreen').text();
  const $about = $('#feature-bullets ul li span').text();
  const $image = $('#landingImage').attr('src');
  res.status(200).json({ title: $title, price: $price, about: $about, image: $image })
}
