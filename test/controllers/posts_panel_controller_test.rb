require 'test_helper'

class PostsPanelControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get posts_panel_index_url
    assert_response :success
  end

end
