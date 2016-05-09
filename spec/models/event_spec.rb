require 'rails_helper'

describe Event do
  it { should belong_to(:organizer) }
end
