require 'rails_helper'

describe Group do
  it { should belong_to(:organizer) }

  it "should have many events" do
    g = Group.reflect_on_association(:events)
    g.macro.should == :has_many
  end
end
