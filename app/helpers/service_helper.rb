module ServiceHelper
  def get_id(url)
    URI.parse(url).path.split('/').reject(&:empty?).last
  end
end