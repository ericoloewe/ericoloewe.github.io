
interface DataLayer {
  event?: string
}

declare const dataLayer: DataLayer[]

class GtmService {
  sendEvent(eventName: string, customProps: object = {}): boolean {
    let tagsWereNotFired = false

    try {
      tagsWereNotFired = !!dataLayer.push({
        event: eventName,
        ...customProps,
      })

      if (tagsWereNotFired) {
        console.log('There is no gtm tags for the event: ', eventName)
      }
    } catch (ex) {
      console.log('There was a problem to send the gtm event ', ex)
    }

    return tagsWereNotFired
  }
}

export const gtmService = new GtmService()