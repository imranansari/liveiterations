module ApplicationHelper

  def markdown(text)
    #options = [:hard_wrap, :filter_html, :autolink, :no_intraemphasis, :fenced_code, :gh_blockcode]
    #Redcarpet.new(text, *options).to_html.html_safe

    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML,
        :autolink => true, :space_after_headers => true)
    raw markdown.render(text)
  end
end
