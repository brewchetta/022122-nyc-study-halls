class WatirScraper

  attr_reader :url, :browser, :text, :tag_name

  def initialize(url, css_classes, tag_name)
    @tag_name = tag_name
    @url = url
    @browser = Watir::Browser.new(:firefox, headless: true)
    @browser.goto(url)
    wait_until_element_exists(css_classes)
    @text = get_text(css_classes)
  end

  def wait_until_element_exists(css_classes)
    browser
    .element(class: css_classes, tag_name: tag_name)
    .wait_until(&:exists?)
  end

  def get_text(css_classes)
    browser
    .elements(class: css_classes, tag_name: tag_name)
    .map { |element| element.inner_text }
  end

  def close
    @browser.close
  end

end
