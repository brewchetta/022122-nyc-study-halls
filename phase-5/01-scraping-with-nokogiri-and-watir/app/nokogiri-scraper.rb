require 'open-uri'

class NokogiriScraper

  attr_reader :url, :html, :parsed_html

  def initialize(url)
    @url = url
    open_uri
    parse_html
  end

  def open_uri
    @html = URI.open(url)
  end

  def parse_html
    @parsed_html = Nokogiri::HTML.parse(html)
  end

  def scrape_text(css_selectors)
    parsed_html.css(css_selectors)
    .map { |element| element.text }
  end

end
