import {fetcher} from "@/lib/api/fetcher";

export async function getStrapiData() {
    const res = await fetcher([query, {}]);
    return {
        preview: res
    }
}

const query =
    `fragment Services on Query {
  services{
      data {
         attributes {
          img {
            data {
               attributes {
                  name
                  width
                  height
                  url
              }
            }
          }
          title
          price
        }
      }
  }
}

fragment Reviews on Query {
  reviews{
      data {
         attributes {
          name_author
          description_review
        }
      }
  }
}


query GetPages {  
          ...Services
          ...Reviews
          homepage {
            data {
              attributes{
                header {
                  titleHeader
                  logoHeader {
                    titleImg
                    alt
                    imgUrl {
                      data {
                        attributes {
                          name
                          width
                          height
                          url
                        }
                      }
                    }
                  }
                  navigations {
                    data {
                      attributes {
                        title
                        url
                      }
                    }
                  }
                }
                body {
                  __typename
                  ...on ComponentSectionPreview {
                    contactsPreview {
                      tel
                      email
                      address
                    }
                    buttonPreview {
                      label
                      url
                    }
                    descriptionPreview
                   }
                  ...on ComponentSectionWork {
                    titleStage
                    listStage {
                      titleStage
                      descriptionStage
                    }
                    imgStage {
                      data {
                        attributes {
                          name
                          width
                          height
                          url
                        }
                      }
                    }
                    link
                  }
                  ...on ComponentSectionAdvantages {
                    titleAdvantages
                    advantage {
                      titleAdv
                      descriptionAdv
                      imgAdv {
                        data {
                          attributes {
                            name
                            url
                            width
                            height
                          }
                        }
                      }
                    }
                  }
                  ...on ComponentSectionAbout {
                    titleAbout
                    secondTitle
                    textAbout
                    form {
                      titleForm
                      descriptionForm
                      titleSuccess
                      descriptionSuccess
                    }
                    input {
                      nameInput
                      label
                      placeholder
                      required
                    }
                    button{
                      label
                      url
                    }
                    link
                  }
                  ...on ComponentSectionReviews {
                    titleReviews
                    button {
                      url
                      label
                    }
                    link
                  }
                  ...on ComponentSectionQuestions {
                    titleQuestions
                    question {
                      questionTitle
                      answer
                    }
                  }
                  
                }
                
                footer {
                  logoFooter {
                    titleImg
                    alt
                    imgUrl {
                      data {
                        attributes {
                          name
                          width
                          height
                          url
                        }
                      }
                    }
                  }
                  contactsFooter {
                    tel
                    email
                    address
                  }
                }
                widgetOrder{
                  form{
                      titleForm
                      descriptionForm
                      titleSuccess
                      descriptionSuccess
                    }
                    input {
                      nameInput
                      label
                      placeholder
                      required
                    }
                    button {
                      label
                      url
                    }
                }
                widgetReview{
                  form {
                      titleForm
                      descriptionForm
                      titleSuccess
                      descriptionSuccess
                    }
                    input {
                      nameInput
                      label
                      placeholder
                      required
                    }
                    button {
                      label
                      url
                    }
                }
              }
            }
          }
        }`;